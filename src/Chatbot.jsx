import React from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './responsive.css'


const Chatbot = () => {
  return (
  <>
      <div className="chatbot-container">
        <Sidebar/>
        <Main/>
      </div>
  </>  
  )
}

export default Chatbot




