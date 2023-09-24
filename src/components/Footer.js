import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='flex justify-between px-20 p-8 border-b-2 border-gray-500'>
                    <div className='flex justify-center  items-center gap-3'>
                        <div className='rounded-full  bg-yellow-500  p-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-white h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <p className='font-Ubuntu text-white text-2xl'>+92 316 92662753</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <div className='rounded-full  bg-yellow-500  p-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-white h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                        </div>
                        <p className='font-Ubuntu text-white text-2xl'>infi@ziaulhuda.com</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <div className='rounded-full  bg-yellow-500  p-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-white h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                        </div>
                        <p className='font-Ubuntu text-white text-2xl'>Farmocote Road Kits Green M’HAM B33 9LU</p>
                    </div>
                </div>

                <div className='p-5 pt-10 pr-20 flex gap-20'>
                    <div className='mt-20'>
                        <img src="/images/footerlogo.png" alt="Logo" className="w-96 h-96  " />

                    </div>
                    <div className='flex flex-col font-Ubuntu gap-10 text-xl text-white mt-20'>
                        <p className=''>USEFUL LINKS</p>
                        <p className='cursor-pointer'>About Donations</p>
                        <p className='cursor-pointer'>About Mufti Qasim Zia Al-Qadri</p>
                        <p className='cursor-pointer'>About Zia ul Huda</p>
                        <p className='cursor-pointer'>Our-Dar-ul-Ifta</p>
                        <p className='cursor-pointer'>What is Zia-ul-Huda?</p>
                        <p className='cursor-pointer'>Why Zia-ul-Huda Website?</p>
                    </div>
                    <div className='flex flex-col font-Ubuntu gap-10 text-xl text-white mt-20'>
                        <p>About Us</p>
                        <p className='cursor-pointer'>Privacy Policies</p>
                        <p className='cursor-pointer'>Terms</p>
                        <p className='cursor-pointer'>About us</p>
                        <div className='flex gap-8'>
                            <img src="/images/fb.png" alt="Logo" className="w-12 h-12  cursor-pointer" />
                            <img src="/images/twiter.png" alt="Logo" className="w-12 h-12  cursor-pointer" />
                            <img src="/images/youtube.png" alt="Logo" className="w-12 h-12  cursor-pointer" />

                        </div>
                    </div>
                    <div className=' flex flex-col flex-1  items-center font-Ubuntu'>
                     <p className='text-yellow-500 text-2xl'> Ask Question </p>
                     <p className='text-white '>Enter your your Query and Send</p>
                    <div className='mt-8 flex flex-col justify-center items-center gap-5 w-full'>
                    <input className="w-full p-5 rounded-xl " placeholder='Your Name'></input>
                    <input className="w-full p-5 rounded-xl" placeholder='Enter Email'></input>
                    <input className="w-full h-40 p-5 rounded-xl" placeholder='Commit'></input>
                    <button className="bg-yellow-500 text-white p-3 w-48 mt-2 rounded-lg text-lg font-Ubuntu ">Submit</button>
                    </div>

                    </div>

                </div>

            </div>
            <div className='font-Inter p-5 flex justify-center items-center text-black text-lg'>
            <p>Copyright  Zia ul huda 2024 | Privacy Policy</p>
            </div>
        </>

    )
}

export default Footer