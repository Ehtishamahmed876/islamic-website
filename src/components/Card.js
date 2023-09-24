import React from 'react'

const Card = ({head1,head2,para1,buttontext,imgsrc}) => {
  return (
            <div className="flex flex-col rounded-lg shadow-xl">
                     <div className='flex-1'>
                   <img src={imgsrc} alt="Logo" className="w-full h-full  " />
                    </div>
                    <div className="flex-1  font-Ubuntu p-8">
                    <p className='text-yellow-500 '>{head1}</p>
                    <p className='text-black font-bold text-lg'>{head2}</p>
                    <p className='w-[22rem]'>{para1}</p>
                    <p className='text-yellow-500 font-bold underline '>{buttontext}</p>
                  
                    </div>
                </div>
  )
}

export default Card