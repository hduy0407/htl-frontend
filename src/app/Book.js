import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "../components/NavBar";
import "../style/Booking.css"

const baseUrl = process.env.REACT_APP_BASE_URL;

const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 5; hour <= 23; hour++) {
        const time = `${hour.toString().padStart(2, "0")}:00`; 
        slots.push(time);
    }
    return slots;
};

const availableTimeSlots = generateTimeSlots();

const Booking = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        timeStart: "",
        timeEnd: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.timeEnd <= formData.timeStart) {
            alert("Thời gian kết thúc phải muộn hơn thời gian bắt đầu");
            return;
        }

        try {
            const response = await fetch(`${baseUrl}/api/bookings`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json()

            if (response.ok) {
                alert("Bạn đã đặt sân thành công")
                navigate("/confirmation")
            } else {
                alert(data.error || "Something went wrong");
            }
        } catch (error) {
            alert("Failed to connect to server");
        }
    } 

    return (
        <div id="book-page">
            <NavBar />
            <div className="body-book">
                <div className="wrapper-book">
                    <form onSubmit={handleSubmit} className="book-form">
                        <h1>Đặt sân</h1>
                        <div className="inputbox">
                            <input type="text" name="name" placeholder="Tên" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="inputbox">
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="inputbox">
                            <input type="text" name="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="inputbox">
                            <label>Chọn ngày:</label>
                            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                        </div>
                        <div className="inputbox">
                            <label>Thời gian bắt đầu:</label>
                            <select name="timeStart" value={formData.timeStart} onChange={handleChange} required>
                                <option value="">Select Start Time</option>
                                {availableTimeSlots?.map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                        <div className="inputbox">
                            <label>Thời gian kết thúc:</label>
                            <select name="timeEnd" value={formData.timeEnd} onChange={handleChange} required>
                                <option value="">Select End Time</option>
                                {availableTimeSlots?.map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn">Đặt sân</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Booking