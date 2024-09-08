import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  const data = useLoaderData()
  return (
    <div className='max-w-continer mx-auto py-8  '>
      <h1 className='font-bold text-2xl '>User : <span className='text-red-700'>{data.length}</span></h1>


      <div className='    text-center items-center   mt-4 grid grid-cols-4   '>
        {
          data.map(user=> <div className='py-2  '  key={user.id}>
            
          <div className=' rounded-xl border-2 p-4   border-gray-300 w-[300px]    '>
          <img  className='p-2 w-[100%] h-[100%] ' src={user.photourl} />
            <h4 className='font-bold text-2xl py-1'>{user.name}</h4>
            <h4 className='font-semibold text-1xl py-1'>{user.email}</h4>
          </div>

          </div>)
        }
      </div>
    </div>
  )
}

export default Home