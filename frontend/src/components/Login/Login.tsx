import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../redux/userSlice";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const profileOptions = [
    "https://res.cloudinary.com/avhixorin/image/upload/v1733932702/dncxrkzcigruffivf6fx.jpg",
    "https://res.cloudinary.com/avhixorin/image/upload/v1733932663/z6xfxqgk16wc6qejirwk.jpg",
    "https://res.cloudinary.com/avhixorin/image/upload/v1733408287/z6dmpqf94uhfc7o8vvhg.jpg",
  ];

  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userProfile.length || !username.length || !roomId.length) {
      toast("Please fill all the fields", { icon: "🚨" });
      return;
    }
    dispatch(updateUser({ username, roomId, userProfile }));
    navigate(`/room/${roomId}`);
  };

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
          {/* Username Input */}
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

          {/* Room ID Input */}
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

          {/* Profile Selection */}
          <div className="form-group">
            <label htmlFor="userProfile" className="form-label">
              User Profile
            </label>
            <div className="w-full flex justify-evenly items-center">
              {profileOptions.map((profile, index) => (
                <img
                  src={profile}
                  key={index}
                  className={`w-16 h-16 rounded-full mt-2 cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out
                  ${
                    selectedProfile === profile &&
                    "ring-4 ring-gray-700 scale-105 shadow-lg"
                  }`}
                  onClick={() => {
                    setUserProfile(profile);
                    setSelectedProfile(profile);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button cursor-pointer">
            Join Room →
          </button>
        </form>
      </div>

      <p className="disclaimer-text">
        By joining, you agree to our Terms of Service
      </p>
    </div>
  );
}
