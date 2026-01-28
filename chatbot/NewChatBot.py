

import streamlit as st
from PyPDF2 import PdfReader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
import os

# Get Groq API key from environment or use default
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "gdfgdffgdfg")

st.header("My PDF Chatbot")

with st.sidebar:
    st.title("Your Documents")
    file = st.file_uploader("Upload a PDF file", type="pdf")

if file is not None:
    pdf_reader = PdfReader(file)
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text()

    text_splitter = RecursiveCharacterTextSplitter(
        
        separators=["\n\n", "\n", " ", ""],
        chunk_size=1000,
        chunk_overlap=150
    )
    chunks = text_splitter.split_text(text)

    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    vector_store = FAISS.from_texts(chunks, embeddings)

    llm = ChatGroq(
        model="llama-3.1-8b-instant",
        temperature=0,
        groq_api_key=GROQ_API_KEY
    )

    prompt = ChatPromptTemplate.from_messages([
        ("system",
         "You are a helpful assistant. Use ONLY the provided PDF context to answer. "
         "If not found in context, reply: 'I can only answer based on the uploaded PDF.'\n\nContext:\n{context}"
         ),
        ("human", "{question}")
    ])

    retriever = vector_store.as_retriever()

    def format_docs(docs):
        return "\n\n".join(doc.page_content for doc in docs)

    chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )

    user_question = st.text_input("Ask a question about the PDF")

    if user_question:
        response = chain.invoke(user_question)
        st.write(response)
