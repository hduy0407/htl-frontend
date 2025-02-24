import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="navbar">
                <h2 className="logo">HTL</h2>
                <ul className="links">
                    <li><a href="/">Trang Chủ</a></li>
                    <li><a href="/booking">Đặt Sân</a></li>
                    <li><a href="/about">Thông Tin</a></li>
                </ul>
                <li className="login"><a className="btn" href="/login">Đăng nhập</a></li>
                
                {/* Toggle Button */}
                <div className="toggle_btn" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                </div>
            </div>

            {/* Dropdown Menu */}
            <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
                <ul className="links">
                    <li><a href="/">Trang Chủ</a></li>
                    <li><a href="/booking">Đặt Sân</a></li>
                    <li><a href="/about">Về Chúng Tôi</a></li>
                </ul>
                <li className="login">
                    <a className="btn" href="/login"><FontAwesomeIcon icon={faUser} /></a>
                </li>
            </div>
        </div>
    );
}
