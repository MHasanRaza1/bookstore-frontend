import React from 'react'
import list from '../constant/list.json'
import Card from './Card'
import { Link } from 'react-router'

const Courses = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-10'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
          <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nesciunt cum repellendus alias neque doloribus quos, tempora sunt dolores corporis ipsum iusto numquam, dolorem quas accusantium voluptate, aliquid ipsam magni!</p>
          <Link to='/'>
          <button
           className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-700'>
            Back</button>
          </Link>
        </div>
        <div className='flex flex-wrap gap-4 mt-5'>
          {
            list.map((item)=>{
              return <Card data={item} key={item.id}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Courses