import React from 'react'

const CourseCard = ({heading1,heading2,para1,para2}) => {
  return (
    <div className='flex flex-col w-96 shadow-lg  justify-center items-center p-5 '>

    <img src="/images/page5img2.png" alt="Logo" className=" w-20  " />
    <h2 className='text-xl mt-3 text-yellow-500 font-bold'>{heading1} </h2>
    <h2 className='text-lg h-8 text-yellow-500'>{heading2}</h2>
    <p className=' w-80'>{para1}</p>
    <p className='w-80'>  {para2}
    </p>
    <button className='bg-yellow-500 text-white w-48 p-3 rounded-3xl mt-8 mx-auto'>Contact Us</button>

</div>
  )
}

export default CourseCard