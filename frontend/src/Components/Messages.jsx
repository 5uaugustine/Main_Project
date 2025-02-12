import React, { useEffect, useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/messages");
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#2e7d32", textAlign: "center" }}>Contact Messages</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#4caf50", color: "white" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Phone</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Message</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Received At</th>
          </tr>
        </thead>
        <tbody>
          {messages.length > 0 ? (
            messages.map((msg) => (
              <tr key={msg._id}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{msg.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{msg.phone}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{msg.email}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{msg.message}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {new Date(msg.createdAt).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>
                No messages found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
