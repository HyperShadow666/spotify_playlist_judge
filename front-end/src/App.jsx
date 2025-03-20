import React from 'react'
import NavBar from './Components/NavBar'
import Display from './Components/Display'
import RightBar from './Components/RightBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BotComponent from './Components/BotComponent';

const App = () => {
  return (
    <Router>
      <div>
        <div className='h-screen bg-black'>
  
          <div className='h-[100%] flex'>
            {/* <SideBar/> */}
            <Routes>
              <Route path="/" element={<BotComponent />} />
              <Route path="/about" element={<Display />} />
            </Routes>
            <RightBar />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App