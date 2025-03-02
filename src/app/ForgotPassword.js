import { useState } from "react";
import axios from "axios";

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
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                <button type="submit">Send Reset Link</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPassword;
