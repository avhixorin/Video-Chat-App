import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [roomId, setRoomId] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/room/${roomId}`)
  }

  return (
    <div className="login-container">
      <div className="background-effects">
        <div className="top-blob"></div>
        <div className="bottom-blob"></div>
      </div>
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">Video Chat</h1>
          <p className="login-subtitle">Secure & High Quality Video Conferencing</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="roomId" className="form-label">
              Room ID
            </label>
            <input
              type="text"
              id="roomId"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="form-input"
              placeholder="Enter room code"
              required
            />
          </div>

          <button type="submit" className="submit-button cursor-pointer">
            Join Room →
          </button>
        </form>
      </div>

      {/* Bottom disclaimer text */}
      <p className="disclaimer-text">
        By joining, you agree to our Terms of Service
      </p>
    </div>
  )
}