import React from 'react'

const CreateUser = () => {
  return (
    <div className='max-w-continer mx-auto'>
        <h1 className='py-4 font-bold text-xl'>Create A New User</h1>

        <div className='py-6  cursor-pointer'> 

            <input type='text' placeholder='Enter Your Name' className='py-4 px-4 outline-none border-2 border-gray-500 w-[400px] rounded-xl' />
              <br/>
              <br/>
            <input type='email' placeholder='Enter Your Email' className='py-4 px-4 outline-none border-2 border-gray-500 w-[400px] rounded-xl' />
             <br/>
             <br/>
            <input type='Photourl' placeholder='Enter Your Photourl' className='py-4 px-4 outline-none border-2 border-gray-500 w-[400px] rounded-xl' />
            
            <br/>
            <br/>
            <button className='px-4 py-4  w-[240px] bg-blue-400 font-bold text-center rounded-xl border-2 border-white ' value="Add user ">Submit</button>
        </div>
    </div>
  )
}

export default CreateUser