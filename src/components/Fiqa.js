import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FiqaCard from './FiqaCard'

const Fiqa = () => {
    return (
        <>
            <div
                className="bg-cover  h-96 bg-yellow-500" // You can adjust the height and other styles as needed
            >
                <Navbar logosrc={"/images/page2logo.png"} />
                <div className='flex flex-col justify-center items-center h-full'>
                    <div className='p-3 mb-28 flex justify-center items-center bg-white w-[60rem] rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input className='flex-1 border-none  m-2 p-3'></input>
                        <button className='bg-black text-white w-40 h-16 rounded-lg text-lg font-Ubuntu'>Search</button>

                    </div>

                </div>
            </div>
            <div className='p-20 flex gap-4 justify-center relative items-center'>
                <div>
                    <img src="/images/page3img1.png" alt="Logo" className=" w-[40rem]  " />
                    <img src="/images/page3img2.png" alt="Logo" className=" w-16 absolute top-16 ml-72 border border-white rounded-full  " />
                    <img src="/images/page3img3.png" alt="Logo" className=" w-16 absolute top-48 ml-[27rem] rounded-full" />
                    <img src="/images/page3img4.png" alt="Logo" className=" w-16 absolute top-[23rem] ml-[36rem] border border-white  rounded-full " />


                </div>
                <div>
                    <h1 className='font-Ubuntu text-3xl text-black font-bold'>Today Fatwa</h1>
                    <p className='w-[40rem] font-Ubuntu text-lg mt-3'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                </div>
            </div>
            <div className='p-5 grid grid-cols-3 grid-flow-row  gap-16'>
                <FiqaCard heading={"Advance RakADVANCE RAQAM DE KAR AIK (1) SAAL BAD SAMAN LENA KAISA ?"} imgsrc={"/images/page3img5.png"} />
                <FiqaCard heading={"NABALIGH BACHE KI AZAN KA HUKUM ?"} imgsrc={"/images/page3img6.png"} />
                <FiqaCard heading={"AULIYA SE DIRECT MADAD MANGNA KAISA?"} imgsrc={"/images/page3img7.png"} />
                <FiqaCard heading={"Advance RakADVANCE RAQAM DE KAR AIK (1) SAAL BAD SAMAN LENA KAISA ?"} imgsrc={"/images/page3img8.png"} />
                <FiqaCard heading={"NABALIGH BACHE KI AZAN KA HUKUM ?"} imgsrc={"/images/page3img9.png"} />
                <FiqaCard heading={"AULIYA SE DIRECT MADAD MANGNA KAISA?"} imgsrc={"/images/page3img10.png"} />
                <FiqaCard heading={"Advance RakADVANCE RAQAM DE KAR AIK (1) SAAL BAD SAMAN LENA KAISA ?"} imgsrc={"/images/page3img11.png"} />
                <FiqaCard heading={"NABALIGH BACHE KI AZAN KA HUKUM ?"} imgsrc={"/images/page3img12.png"} />
                <FiqaCard heading={"AULIYA SE DIRECT MADAD MANGNA KAISA?"} imgsrc={"/images/page3img13.png"} />
                <FiqaCard heading={"Advance RakADVANCE RAQAM DE KAR AIK (1) SAAL BAD SAMAN LENA KAISA ?"} imgsrc={"/images/page3img14.png"} />
                <FiqaCard heading={"NABALIGH BACHE KI AZAN KA HUKUM ?"} imgsrc={"/images/page3img15.png"} />
                <FiqaCard heading={"AULIYA SE DIRECT MADAD MANGNA KAISA?"} imgsrc={"/images/page3img16.png"} />



            </div>
            <div className='flex font-Ubuntu justify-center h-20 items-center  mt-40 mb-80'>
                <div className='flex gap-6'>

                    <button className='h-full p-5 rounded-xl bg-gray-200 text-gray-400 text-4xl '>Previous</button>
                    <button className=' p-3 px-6  rounded-xl text-white text-4xl bg-yellow-500'>1</button>
                    <button className=' p-3 px-6  rounded-xl text-black text-4xl bg-gray-200'>2</button>
                    <button className=' p-3 px-6  rounded-xl text-black text-4xl bg-gray-200'>3</button>
                    <button className=' p-3 px-6  rounded-xl text-black text-4xl bg-gray-200'>4</button>
                </div>
                <div className='flex gap-1 mx-1 '>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>

                </div>



                <div>
                    <button className='h-full p-5 w-56 rounded-xl bg-black text-white  text-4xl'>Next</button>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Fiqa