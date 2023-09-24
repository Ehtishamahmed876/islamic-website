import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Work = () => {
    return (
        <>
            <div
                className="bg-cover  h-full" // You can adjust the height and other styles as needed
                style={{ backgroundImage: 'url(/images/page4back.png)' }}
            >
                <Navbar logosrc={"/images/page4logo.png"} color={"black"} />
                <div className='flex justify-center items center  h-full p-36 '>
                    <div className='flex flex-1 flex-col  px-14 font-Ubuntu'>
                        <h1 className='text-5xl w-[32rem]'>
                        <span className='text-yellow-500'>Spend</span>  (On Donation),  O Son of <span className='text-yellow-500'>Adam</span>, And I Shall Spend  on <span className='text-yellow-500'>you</span> 
                        </h1>
                        <p className="w-96 mt-3">
                        Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                        <button className='flex justify-center items-center gap-4 w-56  rounded-md  bg-yellow-500 mt-10 h-16  p-2 relative'>
                            <p className='text-2xl text-white'> Donate</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-xl mt-1 text-white  w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                    </div>
                    <div className=' flex relative'>
                    <img src="/images/page4img1.png" alt="Logo" className=" w-[28rem] h-[26rem]  absolute -left-44  bottom-16 " />
                    <img src="/images/page4img2.png" alt="Logo" className=" w-96 relative left-44 bottom-24 " />
                    <img src="/images/page4img3.png" alt="Logo" className=" w-96 relative top-28 right-20" />
                        
                    </div>
                </div>
                <div className='mt-20 flex gap-4 mb-60 justify-center items-center '>
                <div className="flex flex-col rounded-lg shadow-xl ">
                                    <div className='flex-1'>
                                        <img src={"/images/homecom4img1.png"} alt="Logo" className="w-full h-full  " />
                                    </div>
                                    <div className="flex-1  font-Ubuntu p-8">
                                        <p className='text-yellow-500 '>BUILDING UPGRADES</p>
                                        <p className='text-black font-bold text-lg'>Mosque Development</p>
                                        <p className='w-[22rem]'>met sectetur adng elit. Vel dicta beatae del voluptas apelas de</p>
                                        <p className='text-yellow-500 font-bold underline '>READ MORE +</p>
                                        <div className='flex justify-center items-center'>
                                        <button className='bg-yellow-500 text-white w-48 p-3 rounded-3xl mt-8 mx-auto'>Donate</button>

                                        </div>                                    </div>
                                </div>
                                <div className="flex flex-col rounded-lg shadow-xl">
                                    <div className='flex-1'>
                                        <img src={"/images/homecom4img2.png"} alt="Logo" className="w-full h-full  " />
                                    </div>
                                    <div className="flex-1  font-Ubuntu p-8">
                                        <p className='text-yellow-500 '>Welfare Work</p>
                                        <p className='text-black font-bold text-lg'>Charity & Donations</p>
                                        <p className='w-[22rem]'>met sectetur adng elit. Vel dicta beatae del voluptas apelas de</p>
                                        <p className='text-yellow-500 font-bold underline '>READ MORE +</p>
                                        <div className='flex justify-center items-center'>
                                        <button className='bg-yellow-500 text-white w-48 p-3 rounded-3xl mt-8 mx-auto'>Donate</button>

                                        </div>                                    </div>
                                </div>
                                <div className="flex flex-col rounded-lg shadow-xl">
                                    <div className='flex-1'>
                                        <img src={"/images/homecom4img3.png"} alt="Logo" className="w-full h-full  " />
                                    </div>
                                    <div className="flex-1  font-Ubuntu p-8">
                                        <p className='text-yellow-500 '>Islamic Study & Quran Academy</p>
                                        <p className='text-black font-bold text-lg'>Islamic Courses, Quran Learn online</p>
                                        <p className='w-[22rem]'>met sectetur adng elit. Vel dicta beatae del voluptas apelas de</p>
                                        <p className='text-yellow-500 font-bold underline '>READ MORE +</p>
                                        <div className='flex justify-center items-center'>
                                        <button className='bg-yellow-500 text-white w-48 p-3 rounded-3xl mt-8 mx-auto'>Donate</button>

                                        </div>
                                    </div>
                                </div>
                                </div>
                   </div>

             <Footer />

        </>
    )
}

export default Work