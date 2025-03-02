import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import NavBar from "../components/NavBar"
import 'boxicons'
import '../style/Login.css'

const baseUrl = process.env.REACT_APP_BASE_URL;

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const navigate = useNavigate(); 
    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
    
        try {
            const response = await fetch(`${baseUrl}/api/users/login`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                localStorage.setItem("token", data.token); 
    
                if (data.isAdmin) {
                    navigate("/adminpage"); 
                } else {
                    navigate("/staffpage"); 
                }
            } else {
                console.log("Login failed:", data.message);
                alert(data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Something went wrong");
        }
    };
    

    return (
        <div id="login-page">
            <NavBar />
            <div className="body-login">
                <div className="wrapper-login"> 
                    <form onSubmit={handleSubmit} className="login-form">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={handleChange} 
                                required 
                            />
                            <box-icon type='solid' name='user' class="icon"></box-icon>
                        </div>
                        <div className="input-box">
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={handleChange} 
                                required 
                            />
                            <box-icon type='solid' name='lock-alt' class="icon"></box-icon>
                        </div>
                        <div className="remember-forgot">
                            <a href="/forgot-password">Forgot password?</a>
                        </div>
                        
                        <button type="submit" className="btn">Login</button>

                        <div className="register-link">
                            <p>Don't have an account? <Link to="/register">Register here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    );
};

export default Login;
