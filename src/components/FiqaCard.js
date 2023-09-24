import React from 'react'

const FiqaCard = ({imgsrc,heading}) => {
    return (
        <div className='flex flex-col justify-center shadow-xl items-center rounded-lg  '>
            <div>
                <img src={imgsrc} alt="Logo" className="h-96 " />

            </div>
            <div className='p-10 w-[31rem]  flex flex-col font-Ubuntu'>
                <h1 className='w-full text-2xl h-24 font-bold'>{heading}</h1>
                <button className='bg-yellow-500 p-3 w-40 text-white rounded-lg'>Read Now</button>
            </div>


        </div>
    )
}

export default FiqaCard