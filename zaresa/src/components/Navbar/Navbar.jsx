// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//             <Link to='/' className='navbar-logo'></Link>
//         </div>
//       </nav>  
//     </>
//   );
// }

// export default Navbar




// import React, {useState} from "react";
// import "../Navbar/Navbar.css";


// function Navbar() {
//     const [active, setActive] = useState("nav__menu");

//     const [toggleIcon, setToggleIcon] = useState("nav__toggler");
//     const navToggle = () => {
//         active === 'nav__menu' 
//             ? setActive("nav__menu nav__active") 
//             : setActive("nav__menu");

//             //TogglerIcon

//             toggleIcon === 'nav__toggler'
//             ? setToggleIcon('nav__toggler toggle')
//             :setToggleIcon("nav__toggler");
//     }



//     return (
//         <nav className="nav">

//             <ul className={active}>
//                 <li className="nav__item">
//                     <a href="#" className="nav__link">Home</a>
//                 </li>
//                 <li className="nav__item">
//                     <a href="#" className="nav__link">About</a>
//                 </li>
//                 <li className="nav__item">
//                     <a href="#" className="nav__link">Contact</a>
//                 </li>
//             </ul>

//             <div onClick = {navToggle} className={toggleIcon}>
//                 <div className="line1"></div>
//                 <div className="line2"></div>
//                 <div className="line3"></div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import React, { useState } from "react";
import "../Navbar/Navbar.css";

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");

    const navToggle = () => {
        active === 'nav__menu'
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu");

        // Toggler Icon
        toggleIcon === 'nav__toggler'
            ? setToggleIcon('nav__toggler toggle')
            : setToggleIcon("nav__toggler");
    }

    return (
        <nav className="nav">
            <ul className={active}>
                <li className="nav__item">
                    <a href="#" className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                    <a href="#about" className="nav__link">About</a>
                </li>
                <li className="nav__item">
                    <a href="#contact" className="nav__link">Contact</a>
                </li>
            </ul>

            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
