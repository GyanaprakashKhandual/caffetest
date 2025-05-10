'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SendHorizonal, BotIcon, UserIcon } from 'lucide-react'

export default function ChatBotPage() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (input.trim() === '') return

    const userMessage = { sender: 'user', text: input }
    setMessages(prev => [...prev, userMessage])

    setTimeout(() => {
      const botReply = { sender: 'bot', text: `🤖 AI: You said "${input}"` }
      setMessages(prev => [...prev, botReply])
    }, 800)

    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tl from-indigo-50 via-sky-100 to-purple-200">
      
      {/* Header */}
      <header className="p-4 bg-gradient-to-tl from-indigo-50 via-sky-100 to-purple-200 shadow-lg flex items-center justify-center rounded-b-xl">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-gray-800"
        >
          Chat With AI For Your Problems
        </motion.h1>
      </header>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: msg.sender === 'user' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-lg p-4 rounded-xl shadow-md ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}>
              <div className="flex items-center gap-3">
                {msg.sender === 'bot' ? <BotIcon className="w-6 h-6 text-indigo-500" /> : <UserIcon className="w-6 h-6 text-white-600" />}
                <p className="text-base">{msg.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input Section */}
      <div className="p-6 bg-white shadow-md flex items-center gap-4 rounded-t-xl">
        <input 
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-opacity-70"
        />
        <button 
          onClick={sendMessage}
          className="p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center"
        >
          <SendHorizonal className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
