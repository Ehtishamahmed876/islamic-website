import React from 'react'
// import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <div
                className="bg-cover  h-full" // You can adjust the height and other styles as needed
                style={{ backgroundImage: 'url(/images/homeback.png)' }}
            >
                <Navbar logosrc={"/images/homelogo.png"} />

                <div className='flex justify-around items-center  h-full'>
                    <div className='flex flex-col items-start font-Ubuntu  text-white'>
                        <h1 className='text-4xl w-96'>And Allah Invites To The <span className='font-bold'>Home Of Peace</span> </h1>
                        <p className='font-thin text-gray-400 mt-3'>The most beloved actions to Allah are those performed consistently, even if they are few</p>


                        <button className='flex justify-center items-center gap-4 px-10  rounded-md  bg-yellow-500 mt-16 h-16  p-2 relative'>
                            <p className='text-2xl'> Donate</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-xl mt-1  w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </button>

                    </div>
                    <div className='mt-10 flex flex-col justify-start'>
                        <p className='text-white ml-5 font-Ubuntu'>Ar Rehman Mosque, Jeddah, Saudia Arabia</p>
                        <div className="flex mt-1 items-center space-x-2 ml-5">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-transparent border border-white"></div>
                        </div>
                        <div
                            className="bg-cover  h-[28rem] " // You can adjust the height and other styles as needed
                            style={{ backgroundImage: 'url(/images/homejumma.png)' }}
                        >
                            <div className='flex flex-col justify-evenly h-full items-center'>
                                <h1 className='text-5xl text-white font-bold font-Aclonica '>Jumuah</h1>
                                <div className='flex flex-col justify-center gap-1 items-center'>
                                    <img src="/images/peerimg.png" alt="Logo" className="w-12 h-12 " />
                                    <p className='text-white font-Ubuntu'>Peer Naabi-ur-Rehman</p>
                                </div>
                                <div className='flex flex-col font-Ubuntu gap-3'>
                                    <button className='w-40 rounded-3xl text-sm  p-1 bg-black text-white bg-opacity-40'>Lecture 12:40</button>
                                    <button className='w-40 rounded-3xl text-sm  p-1 bg-black text-white bg-opacity-40'>Khutba 13:15</button>
                                    <button className='w-40 rounded-3xl text-sm  p-1 bg-black text-white bg-opacity-40'>Salaha 13:30</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex pb-5 gap-1 mt-20 font-Ubuntu'>
                    <div className='h-64 bg-opacity-70 w-[140rem] bg-white relative'>
                        <img src="/images/homebook1.png" alt="Logo" className="w-64 h-[22rem] left-16 absolute bottom-10 " />
                        <div className='  bottom-0 absolute left-32 p-3'>
                            <p className='text-center text-white' >Ramadan Iftar</p>
                            <p className='text-yellow-500'>Zahid-ur-Rashidi</p>
                        </div>

                    </div>
                    <div className='h-64 bg-opacity-70 w-full bg-white relative'>
                        <img src="/images/homebook2.png" alt="Logo" className="w-48 h-64 absolute bottom-10 left-8 " />
                        <div className='  bottom-0 absolute left-16 p-3'>
                            <p className='text-center text-white' >Ramadan Iftar</p>
                            <p className='text-yellow-500'>Zahid-ur-Rashidi</p>
                        </div>
                    </div>
                    <div className='h-64 bg-opacity-70 w-full bg-white relative'>
                        <img src="/images/homebook3.png" alt="Logo" className="w-48 h-64 absolute bottom-10 left-8 " />
                        <div className='  bottom-0 absolute left-16 p-3'>
                            <p className='text-center text-white' >Ramadan Iftar</p>
                            <p className='text-yellow-500'>Zahid-ur-Rashidi</p>
                        </div>
                    </div>
                    <div className='h-64 bg-opacity-70 w-full bg-white relative'>
                        <img src="/images/homebook4.png" alt="Logo" className="w-48 h-64 absolute bottom-10 left-8 " />
                        <div className='  bottom-0 absolute left-16 p-3'>
                            <p className='text-center text-white' >Ramadan Iftar</p>
                            <p className='text-yellow-500'>Zahid-ur-Rashidi</p>
                        </div>
                    </div>
                    <div className='h-64 bg-opacity-70 w-full bg-white relative'>
                        <img src="/images/homebook5.png" alt="Logo" className="w-48 h-64 absolute bottom-10 left-8 " />
                        <div className='  bottom-0 absolute left-16 p-3'>
                            <p className='text-center text-white' >Ramadan Iftar</p>
                            <p className='text-yellow-500'>Zahid-ur-Rashidi</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* Second Component  */}
            <div className='grid grid-cols-3 font-JameelNooriNastaleeq'>
                <div
                  className="bg-cover  h-[52rem] " // You can adjust the height and other styles as needed
                  style={{ backgroundImage: 'url(/images/homeblue1.png)' }}
                >
                  <div className='flex flex-col justify-center mt-20 items-center h-full'>
                  <img src="/images/homeround1.png" alt="Logo" className="w-20 h-20  " />
                  <div>
                 <div className='flex flex-col gap-2 mt-5 justify-center items-center font-serif text-xl'>
                 <p className='text-white'> The Cattle</p> 
                 <p className='text-white'> Surah Al-An'am</p>
                 <p className='text-white'> Verse 76</p>
                 </div>
                 
                 <p className='text-white mt-5 w-96 font-serif text-center text-lg'> فَلَمَّا جَنَّ عَلَيْهِ اللَّيْلُ رَأَىٰ كَوْكَبًا ۖ قَالَ هَٰذَا رَبِّي ۖ فَلَمَّا أَفَلَ قَالَ لَا أُحِبُّ الْآفِلِينَ</p>
                 <p className='text-white w-96 text-center mt-3 font-serif text-lg '> When the night grew dark upon him, he saw a star and said, “This is my Lord!” But when it set, he said, “I do not love things that set.”</p>
                 </div>
                  </div>
              
                </div>
                <div
                  className="bg-cover  h-[52rem] " // You can adjust the height and other styles as needed
                  style={{ backgroundImage: 'url(/images/homeblue2.png)' }}
                >  
                <div className='flex flex-col justify-center items-center h-full '>
                <img src="/images/homeround2.png" alt="Logo" className="w-20 h-20  " />
                <div className="flex flex-col justify-center items-center mb-16">
               
               <p className='text-[#E2BE8D]  w-80 font-serif text-center text-lg '> Abu Tha’labah reported: The people would set up camp and disperse into the trails and valleys. The Messenger of Allah, peace and blessings be upon him, said, “This scattering of yours into the trails and valleys is from Satan.” They never set up camp afterward unless they were close to each other, so much so that it was said a single blanket could be spread over them all.</p>
               <p className='text-[#E2BE8D] w-96 text-center  font-serif  '>Source: Sunan Abī Dāwūd 2628</p>
               <p className='text-[#E2BE8D] w-96 text-center  font-serif  '> Grade: Sahih (authentic) according to Al-Arna’ut</p>
               <p className='text-[#E2BE8D] w-80 text-center  font-serif  '> عَنْ أَبِي ثَعْلَبَةَ الْخُشَنِيِّ قَالَ كَانَ النَّاسُ إِذَا نَزَلُوا مَنْزِلًا تَفَرَّقُوا فِي الشِّعَابِ وَالْأَوْدِيَةِ فَقَالَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ إِنَّ تَفَرُّقَكُمْ فِي هَذِهِ الشِّعَابِ وَالْأَوْدِيَةِ إِنَّمَا ذَلِكُمْ مِنَ الشَّيْطَانِ فَلَمْ يَنْزِلْ بَعْدَ ذَلِكَ مَنْزِلًا إِلَّا انْضَمَّ بَعْضُهُمْ إِلَى بَعْضٍ حَتَّى يُقَالَ لَوْ بُسِطَ عَلَيْهِمْ ثَوْبٌ لَعَمَّهُمْ</p>
               <p className='text-[#E2BE8D] w-80 text-center  font-serif  '> سنن أبي داود كتاب الجهاد باب ما يؤمر من انضمام العسكر وسعته 2628</p>
               <p className='text-[#E2BE8D] w-96 text-center  font-serif  '> 4/267 المحدث شعيب الأرناؤوط خلاصة حكم المحدث إسناده صحيح في تخريج سنن أبي داود</p>
               
               </div>
                </div>
                </div>
                <div
                  className="bg-cover  h-[52rem] " // You can adjust the height and other styles as needed
                  style={{ backgroundImage: 'url(/images/homeblue3.png)' }}
                >
                   <div className='flex flex-col justify-center  items-center h-full'>
                  <img src="/images/homeround3.png" alt="Logo" className="w-20 h-20  " />
                  <div>
               
                 
                 <p className='text-white mt-5 w-96 font-serif text-center text-lg'>لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ</p>
                 <p className='text-white w-96 text-center mt-3 font-serif text-lg '> “Allah does not burden a soul beyond that it can bear.” [Quran 2:286]</p>
                 </div>
                  </div>
                </div>

            </div>




            {/* Component 3  */}
            <div
              className="bg-cover  h-[30rem] font-Ubuntu " // You can adjust the height and other styles as needed
              style={{ backgroundImage: 'url(/images/homecom3back.png)' }}>
               <div className='flex flex-col justify-center  h-full'>
                <div className='flex justify-evenly '>
                   <div className='flex flex-col'>
                   <img src="/images/homecom3img1.png" alt="Logo" className="w-24 h-28  " />
                   <div className='mt-8'> 
                  <p className='text-yellow-500 text-lg'>Quran Studies</p>
                  <p className='w-56'>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus</p>
                  <p className='text-yellow-500 text-lg'>Sponsor Now!</p>
                   </div>

                   </div>

                   <div className='flex flex-col'>
                   <img src="/images/homecom3img2.png" alt="Logo" className="w-24 h-28  " />
                   <div className='mt-8'> 
                  <p className='text-yellow-500 text-lg'>Islamic Classes</p>
                  <p className='w-56'>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus</p>
                  <p className='text-yellow-500 text-lg'>Sponsor Now!</p>
                   </div>

                   </div>


                   <div className='flex flex-col'>
                   <img src="/images/homecom3img3.png" alt="Logo" className="w-24 h-28  " />
                   <div className='mt-8'> 
                  <p className='text-yellow-500 text-lg'>Islamic Awaerness</p>
                  <p className='w-56'>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus</p>
                  <p className='text-yellow-500 text-lg'>Sponsor Now!</p>
                   </div>

                   </div>


                   <div className='flex flex-col'>
                   <img src="/images/homecom3img4.png" alt="Logo" className="w-24 h-28  " />
                   <div className='mt-8'> 
                  <p className='text-yellow-500 text-lg'>Islamic Services</p>
                  <p className='w-56'>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus</p>
                  <p className='text-yellow-500 text-lg'>Sponsor Now!</p>
                   </div>

                   </div>

                </div>
                </div>
            </div>





            {/* Component 4  */}

            <div className='flex flex-col justify-center items-center h-full p-20 font-Ubuntu'>
                <p className='text-yellow-500'>Zia-ul-Huda Organization</p>
                <p className='font-bold text-xl'>Ethical And Moral Beliefs That Guides To The Straight Path!</p>
                <div className='mt-20 flex gap-4 '>
                <Card head1={"BUILDING UPGRADES"} head2={"Mosque Development"} para1={"Lorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas de.Lorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas deLorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas deLorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas de"} buttontext={"READ MORE +"} imgsrc={"/images/homecom4img1.png"}  />
                <Card head1={"Welfare Work"} head2={"Charity & Donations"} para1={"Lorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas de.Lorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas deLorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas deLorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas de"} buttontext={"READ MORE +"} imgsrc={"/images/homecom4img2.png"}  />
                <Card head1={"slamic Study & Quran Academy"} head2={"Islamic Courses, Quran Learn online"} para1={"Lorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas de.Lorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas deLorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas deLorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas de"} buttontext={"READ MORE +"} imgsrc={"/images/homecom4img3.png"}  />
               
                </div>
            </div>





            {/* Components 5 */}


            <div className='flex flex-col justify-center items-center h-[48rem] p-20'>
                <div className='flex justify-between items-center gap-10 '>
                    <div className='flex flex-col font-Ubuntu gap-5 flex-1'>
                        <h1 className='text-yellow-500 text-2xl'>Online Courses</h1>
                        <p>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
</p>
                    </div>
                    <div className='flex-1'>
                   <img src="/images/homecom5img.png" alt="Logo" className="w-full h-full  " />

                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className='p-20 mb-40 '>
                <div
                    className="bg-cover flex   h-[32rem] relative font-Ubuntu rounded-lg" // You can adjust the height and other styles as needed
                    style={{ backgroundImage: 'url(/images/homecom6back.png)' }}>
                         <div className='flex-1'>
                   <img src="/images/homecom6img.png" alt="Logo" className="w-[50rem] -bottom-20 h-[50rem] absolute  " />
                </div>

                <div className='flex-1 flex flex-col  justify-center ml-40'>
                    <p className='text-yellow-500 font-Ubuntu'>ABOUT OUR HISTORY</p>
                    <h1 className='text-white font-Ubuntu text-2xl w-96 font-bold'>Islamic Center For Muslims To Achieve Spiritual Goals</h1>
                    <h2 className='text-white text-lg'>Our Promise To Uphold The Trust Placed</h2>
                    <p className='text-gray-400 w-[28rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi molestias culpa reprehenderit delectus, ullam harum, voluptatum numquam ati nesciunt odit quis corrupti magni quam consequatur sint ipsum tecto exercitationem, illo quisquam. Reprehenderit ut placeat cum adantium nam magnam blanditiis sequi modi! Nesciunt, repudiandae eos eniam quod maxime corrupti eligendi ea in animi.</p>
                    <div>
                    <button className='flex justify-center float-right items-center gap-4 w-72  rounded-md  bg-yellow-500 mt-16 h-16 mr-16  p-2 relative'>
                            <p className='text-2xl text-white'> Ask About Islam</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-xl text-white mt-1  w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                    </button>
                    </div>
                </div>
              
                </div>
               
            </div>
            <Footer />
        </>
    )
}

export default Home