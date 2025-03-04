import { useState } from "react";
import axios from "axios";
import '../style/ForgotPassword.css'

const baseUrl = process.env.REACT_APP_BASE_URL;

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Sending request to:", `${baseUrl}/api/users/forgot-password`);
            const { data } = await axios.post(`${baseUrl}/api/users/forgot-password`, { email });
            setMessage(data.message);
        } catch (error) {
            console.error("Error response:", error.response);
            setMessage("Error sending reset link");
        }
    };

    return (
        <div id="forgot-password-page">
            <div className="forgot-password-body">
                <div className="wrapper-box">
                    <h2>Quên mật khẩu</h2>
                    <h4>Nhập email của bạn</h4>
                    <form onSubmit={handleSubmit} className="forgot-password-form">
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Nhập email của bạn" 
                            required 
                        />
                        <button type="submit" className="btn">Gửi Link</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
