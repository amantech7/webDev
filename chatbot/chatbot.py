import streamlit as st

from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter


st.header("Welcome to the Chatbot Interface")
st.write("This is a simple chatbot interface built with Streamlit.")

with st.sidebar:
    st.title("Chatbot Menu")
    file = st.file_uploader("Upload a file for the chatbot to process", type=["txt", "pdf", "docx"])


# extract data from pdf
if file is not None:
   pdf_reader = PdfReader(file)

   text = ""
   for page in pdf_reader.pages:
        text += page.extract_text() 
        st.write("Extracted Text from PDF:")    
        st.write(text)
 

#  break text into chunks
text_splitter = RecursiveCharacterTextSplitter(
        separator="\n",
        chunk_size=1000,    
        chunk_overlap=150,
        length_function=len 
    )   
chunks = text_splitter.split_text(text)
st.write(f"Total Chunks Created: {len(chunks)}")
st.write(chunks)    