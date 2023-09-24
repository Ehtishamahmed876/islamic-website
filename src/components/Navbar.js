import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ( {logosrc, color}) => {
  return (
    <nav className={`text-${color} py-2`}>
    
        <ul className=" mx-10 flex space-x-3 justify-evenly font-Ubuntu text-lg items-center ">
          <li className=" "><NavLink to="/" activeClassName="text-gray-400"> <img src={logosrc} alt="Logo" className="w-12 h-12" /></NavLink></li>
          <li className=" "><NavLink to="/" activeClassName="text-gray-400">Home</NavLink></li>
          <li className=" "><NavLink to="/quranhadis" activeClassName="text-gray-400">Quran e Hadith</NavLink></li>
          <li className=" "><NavLink to="/fiqa" activeClassName="text-gray-400">Al-Fiqa Islamiya</NavLink></li>
          <li className=" "><NavLink to="/welfare-work" activeClassName="text-gray-400">Welfare Work</NavLink></li>
          <li className=" "><NavLink to="/online-courses" activeClassName="text-gray-400">Online Courses</NavLink></li>
          <li className=" "><NavLink to="/sunna-istakar" activeClassName="text-gray-400">Sunna Istakar</NavLink></li>
          <li className=" "><NavLink to="/library" activeClassName="text-gray-400">Library</NavLink></li>
        </ul>
     
    </nav>
  );
};

export default Navbar;
