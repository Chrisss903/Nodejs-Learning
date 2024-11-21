import React, { useState } from "react";
import axios from "axios";

function App() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post("http://localhost:5000/api/phone", {
        phone,
      });
      setMessage(response.data.message);
      setPhone(""); // Clear input field
    } catch (error) {
      setMessage(error.response?.data?.error || "Error saving phone number");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Save Phone Number</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />
        <button type="submit" style={{ padding: "10px", width: "100%" }}>
          Save
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
