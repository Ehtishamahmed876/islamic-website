import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const QuranHadis = () => {
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
      <div className='p-10'>
           <p className='font-Ubuntu text-4xl ml-10 mb-2 '>Recommended</p>
           <div className='flex  justify-around items-center'>


           <div className='flex flex-col items-center'>
           <img src="/images/page2book1.png" alt="Logo" className=" w-96 " />
            <p className='font-Ubuntu text-xl text-black'>Sirat-ul-Nabi</p>
            <p className='font-Ubuntu text-xl text-black'> or Insani Haqooq</p>
           </div>

           <div className='flex flex-col items-center'>
           <img src="/images/page2book2.png" alt="Logo" className=" w-96 " />
            <p className='font-Ubuntu text-xl text-black'>Sirat-ul-Nabi</p>
            <p className='font-Ubuntu text-xl text-black'> or Insani Haqooq</p>
           </div>

           <div className='flex flex-col items-center'>
           <img src="/images/page2book3.png" alt="Logo" className=" w-96 " />
            <p className='font-Ubuntu text-xl text-black'>Sirat-ul-Nabi</p>
            <p className='font-Ubuntu text-xl text-black'> or Insani Haqooq</p>
           </div>

           <div className='flex flex-col items-center'>
           <img src="/images/page2book4.png" alt="Logo" className=" w-96 " />
            <p className='font-Ubuntu text-xl text-black'>Sirat-ul-Nabi</p>
            <p className='font-Ubuntu text-xl text-black'> or Insani Haqooq</p>
           </div>
       
           </div>

      </div>

      <div className='p-10'>
           <p className='font-Ubuntu text-4xl ml-10 mb-2 '>Categories</p>
           <div className='flex p-10 gap-5 w-full'>

           <div className='bg-[#F6F6F6] flex-1 p-3'>
                <p className='text-yellow-500'>Quran</p>
                <div className='p-5 flex gap-2'>
                   <div className='bg-white flex flex-col mt-10 relative justify-end items-center w-36 h-40 p-1 rounded-lg shadow-xl'>
                   <img src="/images/page2book5.png" alt="Logo" className=" w-40  h-48  absolute bottom-7 right-2" />
                   <p className='font-Ubuntun text-sm   text-black'>Open latter</p>
                    <p className='font-Ubuntu text-sm  text-yellow-500'>Zahid-ur-Rashidi</p>
                  </div>
                  <div className='bg-white flex flex-col mt-10 relative justify-end items-center w-36 h-40 p-1 rounded-lg shadow-xl'>
                   <img src="/images/page2book6.png" alt="Logo" className=" w-40  h-48  absolute bottom-7 right-2" />
                   <p className='font-Ubuntun text-sm   text-black'>Open latter</p>
                    <p className='font-Ubuntu text-sm  text-yellow-500'>Zahid-ur-Rashidi</p>
                  </div>
                  <div className='bg-white flex flex-col mt-10 relative justify-end items-center w-36 h-40 p-1 rounded-lg shadow-xl'>
                   <img src="/images/page2book7.png" alt="Logo" className=" w-40  h-48  absolute bottom-7 right-2" />
                   <p className='font-Ubuntun text-sm   text-black'>Open latter</p>
                    <p className='font-Ubuntu text-sm  text-yellow-500'>Zahid-ur-Rashidi</p>
                  </div>
                  <div className='bg-white flex flex-col mt-10 relative justify-end items-center w-36 h-40 p-1 rounded-lg shadow-xl'>
                   <img src="/images/page2book8.png" alt="Logo" className=" w-40  h-48  absolute bottom-7 right-2" />
                   <p className='font-Ubuntun text-sm   text-black'>Open latter</p>
                    <p className='font-Ubuntu text-sm  text-yellow-500'>Zahid-ur-Rashidi</p>
                  </div>
                  
                </div>
           </div>
            <div className='flex-1 bg-[#F6F6F6] p-3'>
            <p className='text-yellow-500'>Hadith</p>
                <div className='p-5 flex gap-2'>
                   <div className='bg-white flex flex-col mt-10 relative justify-end items-center w-36 h-40 p-1 rounded-lg shadow-xl'>
                   <img src="/images/page2book9.png" alt="Logo" className=" w-40  h-48  absolute bottom-7 right-2" />
                   <p className='font-Ubuntun text-sm   text-black'>Open latter</p>
                    <p className='font-Ubuntu text-sm  text-yellow-500'>Zahid-ur-Rashidi</p>
                  </div>
                  <div className='bg-white flex flex-col mt-10 relative justify-end items-center w-36 h-40 p-1 rounded-lg shadow-xl'>
                   <img src="/images/page2book10.png" alt="Logo" className=" w-40  h-[182px]  absolute bottom-7 " />
                   <p className='font-Ubuntun text-sm   text-black'>Open latter</p>
                    <p className='font-Ubuntu text-sm  text-yellow-500'>Zahid-ur-Rashidi</p>
                  </div>
                  <div className='bg-white flex flex-col mt-10 relative justify-end items-center w-36 h-40 p-1 rounded-lg shadow-xl'>
                   <img src="/images/page2book11.png" alt="Logo" className=" w-40  h-48  absolute bottom-7 right-2" />
                   <p className='font-Ubuntun text-sm   text-black'>Open latter</p>
                    <p className='font-Ubuntu text-sm  text-yellow-500'>Zahid-ur-Rashidi</p>
                  </div>
                  <div className='bg-white flex flex-col mt-10 relative justify-end items-center w-36 h-40 p-1 rounded-lg shadow-xl'>
                   <img src="/images/page2book12.png" alt="Logo" className=" w-40  h-48  absolute bottom-7 right-2" />
                   <p className='font-Ubuntun text-sm   text-black'>Open latter</p>
                    <p className='font-Ubuntu text-sm  text-yellow-500'>Zahid-ur-Rashidi</p>
                  </div>
                  
                </div>

            </div>
           </div>

      </div>
      <Footer />

    </>

  )
}

export default QuranHadis