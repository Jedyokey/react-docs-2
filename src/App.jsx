import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Interactivity from './pages/Interactivity';
import EventResponse from './pages/EventResponse';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Interactivity />} />
          <Route path='/responding-to-events' element={<EventResponse />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
