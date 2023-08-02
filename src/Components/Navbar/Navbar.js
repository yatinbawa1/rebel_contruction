import React, { useState } from "react";
import logo from './Logo 2.svg';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';
import './Navbar.css';
import { NavHashLink } from 'react-router-hash-link';


const Navbar_self = () => {
    const [active, setActive] = useState(1);
    const [open, setOpen] = useState(false);

    const onClick = (number) => {
        setActive(number);
    }

    return (
        <div className={`Navbar ${open ? "Navbar-Open" : "Navbar-Close"}`}>
            <div className="brand">
                <img src={logo} alt="logo of rebel" style={{
                    height: "180px",
                    alignSelf: "center",
                }} />
                <div className="toggle-for-navbar">
                    {!open ? <RxHamburgerMenu color="#0e0e0e" onClick={() => setOpen(true)} /> : <GrClose onClick={() => setOpen(false)} />}
                </div>
            </div>
            <div className="content">
                <NavHashLink smooth onClick={() => onClick(1)} className={`link ${active === 1 ? "active1" : ""}`} to="/#top">Home</NavHashLink>
                <NavHashLink smooth onClick={() => onClick(2)} className={`link ${active === 2 ? "active1" : ""}`} to="/projects">Projects</NavHashLink>
                <NavHashLink smooth onClick={() => onClick(3)} className={`link ${active === 3 ? "active1" : ""}`} to="/#services">Services</NavHashLink>
                <NavHashLink smooth onClick={() => onClick(4)} className={`link ${active === 4 ? "active1" : ""}`} to="/#contact-us">Contact Us</NavHashLink>
            </div>
        </div >
    )
}

export default Navbar_self;