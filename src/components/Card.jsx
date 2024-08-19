import React from 'react'

const Card = () => {
  return (
    <div className='bg-blue-200 w-96 mx-auto mt-5 rounded-lg py-2 px-5'>
        <h1 className='text-2xl'>Kevin Peterson</h1>
        <p>Jr. Software Developer</p>
        <div className='m-5 flex justify-between items-center'>
            <div className='text-left'>
        <p className='font-medium mb-3'>ID: KV27189</p> 
            <p>
                #134-822 Mg Street <br/> 
                Indira Nagar II Cross <br/>
                Bangalore, Karnataka <br/>
                INDIA - 516330.
            </p>
            </div>
            <div className='border border-black bg-gray-400 w-32 h-36 flex items-center justify-center'>
                <p>Profile Photo</p>
            </div>
        </div>
        
    </div>
  )
}

export default Card