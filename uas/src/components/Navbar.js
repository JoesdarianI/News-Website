import React,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Monsterf from './picture/Logo.png'
import { GiSoundWaves } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!false)
    
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    }

useEffect(() => {
    showButton();
}, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
             <div className='navbar-container container'>
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <GiSoundWaves className="navbar-icon"/>
                    <img src={Monsterf} className="navbar-img" alt="img"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes/>:<FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/Home' className="nav-links" onClick={closeMobileMenu}>
                        Home    
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/category' className="nav-links" onClick={closeMobileMenu}>
                        Category    
                        </Link>       
                    </li>
                    <li className="nav-item">
                        <Link to='/News' className="nav-links" onClick={closeMobileMenu}>
                        News   
                        </Link>
                    </li>
                </ul>
             </div>
            </div> 
            </IconContext.Provider>
        </>
    );
}

export default Navbar;