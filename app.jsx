import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("login");

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [booking, setBooking] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    cab: "Mini",
  });

  // LOGIN
  const handleLogin = () => {
    if (user.name.trim() === "" || user.email.trim() === "") {
      alert("Please fill all details");
      return;
    }
    setPage("booking");
  };

  // BOOKING
  const handleBooking = () => {
    const { pickup, drop, date, time } = booking;
    if (!pickup || !drop || !date || !time) {
      alert("Fill all booking details");
      return;
    }
    setPage("summary");
  };

  const logout = () => {
    setPage("login");
  };

  // STYLES
  const container = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #2c3e50, #4ca1af)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  };

  const card = {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    width: "320px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
  };

  const input = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  const button = {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#2c3e50",
    color: "#fff",
    cursor: "pointer",
  };

  // LOGIN PAGE
  if (page === "login") {
    return (
      <div style={container}>
        <div style={card}>
          <h2>🚖 Cab Booking</h2>

          <input
            style={input}
            placeholder="Name"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
          />

          <input
            style={input}
            placeholder="Email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
          />

          <button style={button} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }

  // BOOKING PAGE
  if (page === "booking") {
    return (
      <div style={container}>
        <div style={card}>
          <h2>🚕 Book Ride</h2>

          <input
            style={input}
            placeholder="Pickup Location"
            value={booking.pickup}
            onChange={(e) =>
              setBooking({ ...booking, pickup: e.target.value })
            }
          />

          <input
            style={input}
            placeholder="Drop Location"
            value={booking.drop}
            onChange={(e) =>
              setBooking({ ...booking, drop: e.target.value })
            }
          />

          <input
            type="date"
            style={input}
            value={booking.date}
            onChange={(e) =>
              setBooking({ ...booking, date: e.target.value })
            }
          />

          <input
            type="time"
            style={input}
            value={booking.time}
            onChange={(e) =>
              setBooking({ ...booking, time: e.target.value })
            }
          />

          <select
            style={input}
            value={booking.cab}
            onChange={(e) =>
              setBooking({ ...booking, cab: e.target.value })
            }
          >
            <option>Mini</option>
            <option>Sedan</option>
            <option>SUV</option>
          </select>

          <button style={button} onClick={handleBooking}>
            Confirm Booking
          </button>
        </div>
      </div>
    );
  }

  // SUMMARY PAGE
  if (page === "summary") {
    return (
      <div style={container}>
        <div style={card}>
          <h2>📋 Booking Summary</h2>

          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>

          <hr />

          <p><b>Pickup:</b> {booking.pickup}</p>
          <p><b>Drop:</b> {booking.drop}</p>
          <p><b>Date:</b> {booking.date}</p>
          <p><b>Time:</b> {booking.time}</p>
          <p><b>Cab:</b> {booking.cab}</p>

          <button style={button} onClick={() => setPage("profile")}>
            View Profile
          </button>

          <button style={button} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  // PROFILE PAGE
  if (page === "profile") {
    return (
      <div style={container}>
        <div style={card}>
          <h2>👤 Profile</h2>

          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>

          <button style={button} onClick={() => setPage("booking")}>
            Book Again
          </button>

          <button style={button} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}
