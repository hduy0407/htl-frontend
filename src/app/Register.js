import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar"
import 'boxicons'
import '../style/Login.css'

const baseUrl = process.env.REACT_APP_BASE_URL;

const Register = () => {
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        accessKey: "",
    });

    const navigate = useNavigate();

    const { name, email, password, accessKey } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let endpoint = "/api/users"

        if (password.length < 8) {
            setMessage("Password must be at least 8 characters long");
            return;
        }

        if (accessKey === process.env.REACT_APP_ACCESS_KEY_ADMIN) {
            endpoint = "/api/users/admin"
        } else if (accessKey !== process.env.REACT_APP_ACCESS_KEY) {
            alert("Invalid access key")
            return;
        }

        try {
            const response = await fetch(`${baseUrl}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful");
                navigate("/login"); 
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Something went wrong");
        }
    };

    return (
        <div id="register-page">
            <NavBar />
            <div className="body-login">
                <div className="wrapper-login">
                    <form onSubmit={handleSubmit} className="login-form">
                        <h1>Register</h1>
                        <div className="input-box">
                            <input type="text" name="name" placeholder="Tên" value={name} onChange={handleChange} required />
                        </div>
                        <div className="input-box">
                            <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required />
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder="Mật Khẩu" value={password} onChange={handleChange} required />
                        </div>
                        <div className="input-box">
                            <input type="password" name="accessKey" placeholder="Admin code" value={accessKey} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn">Tạo tài khoản</button>

                        <div className="register-link">
                            <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;