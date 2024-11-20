import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Interactivity from './pages/Interactivity';
import EventResponse from './pages/EventResponse';
import UseStatePage from './pages/UseStatePage';
import StateUpdates from './pages/StateUpdates';
import StateExercise from './pages/StateExercise';
import UpdateArray from './pages/UpdateArray';
import UpdateArray2 from './pages/UpdateArray2';
import ArrayChallenge from './pages/ArrayChallenge';

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
          <Route path='/updating-arrays-in-state' element={<UpdateArray />} />
          <Route path='/updating-arrays-in-state-part-2' element={<UpdateArray2 />} />
          <Route path='/update-array-in-state-challenges' element={<ArrayChallenge />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
