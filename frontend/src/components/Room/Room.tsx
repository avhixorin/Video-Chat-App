"use client"

import { useState } from "react"
import { Mic, MicOff, Video, VideoOff, PhoneOff, Send, Users, MoreVertical, MessageSquare } from "lucide-react"

export default function Room() {
  const [isMicOn, setIsMicOn] = useState(true)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [message, setMessage] = useState("")

  const toggleMic = () => setIsMicOn(!isMicOn)
  const toggleVideo = () => setIsVideoOn(!isVideoOn)
  const toggleChat = () => setIsChatOpen(!isChatOpen)
  const endCall = () => console.log("Call ended")

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Message sent:", message)
    setMessage("")
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="relative w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
        {/* Main video area */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800">
          {isVideoOn ? (
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Video stream"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-700">
              <Video size={64} className="text-gray-400" />
            </div>
          )}
        </div>

        {/* Participant thumbnails */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-24 h-16 bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <img
                src={`/placeholder.svg?height=90&width=160&text=User ${i}`}
                alt={`User ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Participant count */}
        <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-75 px-3 py-1 rounded-full flex items-center space-x-2">
          <Users size={16} />
          <span className="text-sm font-medium">4</span>
        </div>

        {/* Chat overlay */}
        {isChatOpen && (
          <div className="absolute max-h-96 bottom-4 right-4 w-80 bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden flex flex-col shadow-xl border border-gray-700">
            <div className="p-3 bg-gray-900 flex justify-between items-center">
              <h3 className="font-semibold">Chat</h3>
              <button onClick={toggleChat} className="text-gray-400 hover:text-white transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="bg-blue-600 bg-opacity-50 p-3 rounded-lg rounded-br-none self-end max-w-[80%]">
                <p className="text-sm">Hello, how are you?</p>
                <span className="text-xs text-gray-300 mt-1 block">You - 2:30 PM</span>
              </div>
              <div className="bg-gray-700 bg-opacity-50 p-3 rounded-lg rounded-bl-none self-start max-w-[80%]">
                <p className="text-sm">I'm doing great, thanks for asking!</p>
                <span className="text-xs text-gray-300 mt-1 block">John - 2:31 PM</span>
              </div>
            </div>
            <form onSubmit={sendMessage} className="p-3 bg-gray-900 flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-800 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-r-full px-4 py-2 hover:bg-blue-500 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        )}

        {/* Control buttons */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={toggleMic}
            className={`p-3 rounded-full transition-colors ${
              isMicOn ? "bg-gray-700 hover:bg-gray-600" : "bg-red-600 hover:bg-red-500"
            }`}
          >
            {isMicOn ? <Mic size={24} /> : <MicOff size={24} />}
          </button>
          <button
            onClick={toggleVideo}
            className={`p-3 rounded-full transition-colors ${
              isVideoOn ? "bg-gray-700 hover:bg-gray-600" : "bg-red-600 hover:bg-red-500"
            }`}
          >
            {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
          </button>
          <button onClick={endCall} className="p-3 rounded-full bg-red-600 hover:bg-red-500 transition-colors">
            <PhoneOff size={24} />
          </button>
          <button
            onClick={toggleChat}
            className={`p-3 rounded-full transition-colors ${
              isChatOpen ? "bg-blue-600 hover:bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            <MessageSquare size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

