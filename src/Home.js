import './style/Home.css';
import NavBar from './components/NavBar';
import './style/ImgContainer.css';


function Home() {
  const handleBooking = () => {
    window.location.href = '/booking';
  }

  return (
    <div>
      <div className="banner">
        <NavBar />
        <div className="content">
          <h1>HTL PICKLEBALL</h1>
          <p>Mang đến cho quý vị hệ thống 6 sân Pickleball ngoài trời đạt tiêu chuẩn quốc tế</p>
          <p>Đặt sân ngay để trải nghiệm</p>
          <div>
            <button type='button_book' onClick={handleBooking}><span></span>Đặt Sân</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;