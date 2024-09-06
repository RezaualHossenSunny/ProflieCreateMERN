import React from 'react'

const CreateUser = () => {

    const handleuser=(e)=>{
        event.preventDefault();

        const form =  e.target
        const name =form.name.value;
        const email =form.email.value;
        const photourl =form.photourl.value;

        
      const user ={name,email,photourl}
      console.log(user);
      
      

    }


  return (
    <div className='max-w-continer mx-auto'>
        <h1 className='py-4 font-bold text-xl'>Create A New User</h1>




        <form onSubmit={handleuser} className='py-6  cursor-pointer'> 

            <input type='text' name='name' id='name' placeholder='Enter Your Name' className='py-4 px-4 outline-none border-2 border-gray-500 w-[400px] rounded-xl' />
              <br/>
              <br/>
            <input type='email' name='email' id='email' placeholder='Enter Your Email' className='py-4 px-4 outline-none border-2 border-gray-500 w-[400px] rounded-xl' />
             <br/>
             <br/>
            <input type='Photourl' name='photourl' id='photourl' placeholder='Enter Your Photourl' className='py-4 px-4 outline-none border-2 border-gray-500 w-[400px] rounded-xl' />
            
            <br/>
            <br/>
            <button className='px-4 py-4  w-[240px] bg-blue-400 font-bold text-center rounded-xl border-2 border-white ' value="Add user ">Submit</button>

        </form>





    </div>
  )
}

export default CreateUser