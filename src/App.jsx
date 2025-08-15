import React from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Front from './components/Front'
// import Exp from './components/exp/Exp'
import { Route, Routes } from 'react-router-dom'
import Chatbot from './Chatbot'


const App = () => {
  return (
    <div className='h-full w-full flex'>
      
      <Routes>
        <Route path='/' element={<Front/>}/>
        <Route path='./Main.jsx' element={<Chatbot/>} />
      </Routes>
    </div>
  )
}
export default App