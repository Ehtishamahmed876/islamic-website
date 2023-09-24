import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CourseCard from './CourseCard'

const Courses = () => {
    return (
        <>
            <div
                className="bg-cover  h-full bg-yellow-500" // You can adjust the height and other styles as needed
            >
                <Navbar logosrc={"/images/page2logo.png"} color={"white"} />
                <div className='flex  justify-center gap-5 mr-40 items-center h-full p-20'>
                    <div>
                        <img src="/images/page5img1.png" alt="Logo" className=" w-[30rem]  " />
                    </div>
                    <div className='flex flex-col items-start font-Ubuntu  text-white'>
                        <h1 className='text-4xl w-[33rem]'>Learn And  <span className='font-bold'>Memorize Quran</span> With Tajweed Along With <span className='font-bold'>Islamic Studies</span> </h1>
                        <p className='font-thin text-white w-96 mt-3'>Under qualified male and female teachers the most fun and fastest way</p>


                        <button className='flex justify-center items-center gap-4 px-10  rounded-md  bg-black mt-5 h-16  p-2 relative'>
                            <p className='text-2xl'> Active Now</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-xl mt-1  w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </button>

                    </div>
                </div>
            </div>
            <div className='font-Ubuntu mt-10 p-20'>
                <h1 className='text-3xl font-bold text-black'>Our Services</h1>
                <h2 className='text-3xl text-yellow-500'>Courses thats we Offer</h2>
                <p className='mt-5'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
            </div>
            <div className=' p-5 px-20'>
            <h2 className='text-3xl text-yellow-500 font-bold'>Islamic Courses</h2>
            <div className='p-3 mt-5 grid grid-cols-3 grid-flow-row  gap-16'>
                <CourseCard heading1={"Quran & islamic study"} heading2={"Beginner"} para1={"Lorem ipsum dolor sit amet, consectetur adiptur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus"} para2={" Curabitured leo vestibulum venenatis. Suspendisse quis arcu sem. Aeneauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo."} />
                <CourseCard heading1={"Quran & islamic study"} heading2={"Intermediate"} para1={"Lorem ipsum dolor sit amet, consectetur adiptur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus"} para2={" Curabitured leo vestibulum venenatis. Suspendisse quis arcu sem. Aeneauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo."} />
                <CourseCard heading1={"Gie Easy Tajweed"}  para1={"Lorem ipsum dolor sit amet, consectetur adiptur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus"} para2={" Curabitured leo vestibulum venenatis. Suspendisse quis arcu sem. Aeneauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo."} />
                <CourseCard heading1={"Quran & islamic study"} heading2={"Beginner"} para1={"Lorem ipsum dolor sit amet, consectetur adiptur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus"} para2={" Curabitured leo vestibulum venenatis. Suspendisse quis arcu sem. Aeneauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo."} />
                <CourseCard heading1={"Quran & islamic study"} heading2={"Intermediate"} para1={"Lorem ipsum dolor sit amet, consectetur adiptur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus"} para2={" Curabitured leo vestibulum venenatis. Suspendisse quis arcu sem. Aeneauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo."} />
                <CourseCard heading1={"Gie Easy Tajweed"}  para1={"Lorem ipsum dolor sit amet, consectetur adiptur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus"} para2={" Curabitured leo vestibulum venenatis. Suspendisse quis arcu sem. Aeneauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo."} />
                
            </div>

            </div>
            <div className='p-40'>
            <div
                className="bg-cover rounded-xl h-96" // You can adjust the height and other styles as needed
                style={{ backgroundImage: 'url(/images/page5back.png)' }}
            >
                <div className='font-Ubuntu flex flex-col h-full justify-center items-center'>
                    <h1 className='text-yellow-500 text-xl'>“Seek knowledge from the cradle to the grave.”  </h1>
                    <p className='w-[35rem] text-white text-xl'>Prophet Muhammad (peace be upon him) “Acquire knowledge and impart it to the people.” – Prophet Muhammad (peace be upon him) “Knowledge is the lost property of the believer, so wherever he finds it, he should take it.” – Prophet Muhammad </p>
                    <p className='text-xl text-white'>(peace be upon him)</p>
                </div>
                </div>
                  </div>
            <Footer />

        </>
    )
}

export default Courses