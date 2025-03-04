import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password.length < 8) {
            setMessage("Password must be at least 8 characters long");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            const { data } = await axios.post(`${baseUrl}/api/users/reset-password/${token}`, { password, confirmPassword });
            setMessage(data.message);
            navigate("/login")
        } catch (error) {
            setMessage(error.response?.data?.message || "Error resetting password");
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password" required />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" required />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;
