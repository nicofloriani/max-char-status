import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const maxLength = 60;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="App">
      {showSuccess ? (
        <p className="message-success">Thanks for your thoughts!</p>
      ) : (
        <div className="status-update">
          <h1>Super Short Status!</h1>
          <p>Tell us how you are doing in 60 characters or less!</p>
          <form onSubmit={handleSubmit}>
            <textarea
              className={message.length > maxLength ? "too-long" : ""}
              placeholder="What's good?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              disabled={message.length < 1 || message.length > maxLength}
              type="submit"
            >
              Tell the world!
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
