import { useState, useEffect } from "react";

const baseUrl = process.env.REACT_APP_BASE_URL;

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/bookings`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched bookings:", data);
        setBookings(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  const handleConfirm = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/api/bookings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setBookings(bookings.map((booking) =>
          booking._id === id ? { ...booking, confirmed: true } : booking
        ));
      } else {
        console.error("Error confirming booking:", data.error);
      }
    } catch (error) {
      console.error("Error confirming booking:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/api/bookings/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setBookings(bookings.filter((booking) => booking._id !== id));
      } else {
        console.error("Error deleting booking:", data.error);
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin - Manage Reservations</h1>
      <div className="booking-list">
        {bookings.map((booking) => (
          <div className="booking-container" key={booking._id} style={booking.confirmed ? { border: '2px solid green' } : { border: '2px solid red' }}>
            <h3>Booking Information</h3>
            <div><strong>Name:</strong> {booking.name}</div>
            <div><strong>Email:</strong> {booking.email}</div>
            <div><strong>Phone:</strong> {booking.phone}</div>
            <div><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</div>
            <div><strong>Time:</strong> {booking.timeStart} - {booking.timeEnd}</div>
            <div><strong>Status:</strong> {booking.confirmed ? "Confirmed" : "Pending"}</div>
            <div>
              <button onClick={() => handleConfirm(booking._id)} disabled={booking.confirmed}>Confirm</button>
              <button onClick={() => handleDelete(booking._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
