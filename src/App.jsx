import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Interactivity from './pages/Interactivity';
import EventResponse from './pages/EventResponse';
import UseStatePage from './pages/UseStatePage';
import StateUpdates from './pages/StateUpdates';
import StateExercise from './pages/StateExercise';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Interactivity />} />
          <Route path='/responding-to-events' element={<EventResponse />} />
          <Route path='/all-about-state' element={<UseStatePage />} />
          <Route path='/queueing-a-series-of-state-updates' element={<StateUpdates />} />
          <Route path='/challenges-on-updating-object-in-state' element={<StateExercise />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
