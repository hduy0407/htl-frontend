import React from 'react'
import NavBar from '../components/NavBar'
import "../style/About.css"
import Footer from '../components/Footer.js'

const About = () => {
  return (
    <div className='about-page'>
      <div className='header'>
        <NavBar className="navbar"/>
        <h2 className='title'>Về chúng tôi</h2>
      </div>
      <div className='holder'>
        <div className="container-text">
          <h3 className='title'>Vị trí thuận lợi</h3>
          <p>Nằm tại trung tâm Hà Nội, HTL Pickleball Center dễ dàng tiếp cận cho 
            cư dân thành phố và các khu vực lân cận.</p>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.033446590892!2d105.85587561030516!3d21.031347680537824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0000715b7f%3A0xfa2626407c65ab52!2sHTL%20Pickleball%20Center!5e0!3m2!1svi!2sfi!4v1741029989190!5m2!1svi!2sfi" 
          width="600" 
          height="450" 
          style={{border: 0}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          className='img'
        ></iframe>
      </div>
      <div className='holder'>
        <img src='/assets/about1.jpg' alt='img1' className='img'/>
        <div className="container-text">
          <h3 className='title'>Cơ sở vật chất đạt chuẩn</h3>
          <p>Với 6 sân pickleball ngoài trời được thiết kế theo tiêu chuẩn quốc tế, trung tâm đảm bảo 
            môi trường chơi an toàn và chuyên nghiệp cho cả người mới bắt đầu và vận động viên chuyên nghiệp.</p>
        </div>
      </div>
      <div className='holder-3'>
        <div className="container-text">
          <h3 className='title'>Dịch vụ đa dạng</h3>
          <p>HTL Pickleball Center cung cấp các khung giờ linh hoạt, đáp ứng nhu cầu luyện tập và thi đấu của người chơi. Trung tâm cũng 
            tổ chức các khóa học cơ bản cho người mới, giúp họ nhanh chóng làm quen và yêu thích môn thể thao này.
          </p>
        </div>
        <div className='img-container'>
          <img src='/assets/about3.jpg' alt='img-1' />
          <img src='/assets/about4.jpg' alt='img-2' />
          <img src='/assets/about5.jpg' alt='img-3' />
        </div>
      </div>
      <div className='holder'>
        <div className="container-text">
          <h3 className='title'></h3>
          <p></p>
        </div>
      </div>
      <div className='holder'>
        <p></p>
      </div>
      <Footer />
    </div>
  )
}

export default About
