import React from 'react';
import '../style/Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';





const Footer = () => {
    return (
        <footer className="footer">
            <div className='row'>
                <div className='col '>
                    <img src='/logo.png' className='logo' alt='logo'></img>
                    <p>Hãy tham gia ngay, để trải nghiệm sân pickleball và nhiều dịch vụ khác.</p>
                </div>
                <div className='col'>
                    <h3>Địa chỉ <div className='underline'><span></span></div></h3>
                    <p>
                        44 Hàm Tử Quan, Chương Dương Độ, Hoàn Kiếm, Hà Nội, Việt Nam
                    </p>
                </div>
                <div className='col'>
                    <h3>Liên hệ <div className='underline'><span></span></div></h3>
                    <h4><a href="tel:+84796168882">+84 79 616 8882</a></h4>
                    <p className='email'>
                    <a href="mailto:htlsports.event@gmail.com">htlsports.event@gmail.com</a>
                    </p>
                </div>
                <div className='col'>
                <h3>Liên kết <div className='underline'><span></span></div></h3>
                <ul>
                    <li><a href="">Trang Chủ</a></li>
                    <li><a href="">Đặt sân</a></li>
                    <li><a href="">Giới thiệu</a></li>
                </ul>
                </div>
                <div className='col'>
                    <div className='social-icon'>
                        <a href="https://www.facebook.com/HTLpickleballcenter" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className='fab' />
                        </a>
                        <a href="mailto:htlsports.event@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className='fab' />
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright">Copyright 2025 © HTL Pickleball Center</p>
        </footer>
    );
};

export default Footer;
