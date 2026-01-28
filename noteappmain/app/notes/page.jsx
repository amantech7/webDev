import React from 'react'

function page() {
  return (
   <div>
    <h1>Notes Page</h1>
    <div className=' bg-gray-800 justify-center items-center flex h-96 '>
        <h1 className=' text-white text-3xl '>This is Notes Page</h1>

        <p className=' text-white text-xl '>This is a paragraph</p>
        <div>
            <div>
                <input type="text" placeholder='Enter your note here' className=' p-2 rounded-md m-2'/>
                <button className=' bg-blue-500 text-white p-2 rounded-md m-2 '>Add Note</button>   

            </div>

            <div>
                <h2 className=' text-white text-2xl '>Your Notes:</h2>
                <ul>
                    <li className=' text-white '>Note 1</li>
                    <li className=' text-white '>Note 2</li>
                </ul>

                <button className=' bg-red-500 text-white p-2 rounded-md m-2 '>Delete Note</button>
            </div>
        </div>
    </div>
   </div>
  )
}

export default page