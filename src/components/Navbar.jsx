import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink 
        to="/" 
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        Interactivity
      </NavLink>

      <NavLink 
        to="/responding-to-events" 
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        EventResponse
      </NavLink>

      <NavLink 
        to="/all-about-state" 
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        UseState
      </NavLink>

      <NavLink 
        to="/queueing-a-series-of-state-updates" 
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        State_Update
      </NavLink>

      <NavLink 
        to="/challenges-on-updating-object-in-state" 
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        State_Exercise
      </NavLink>

      <NavLink 
        to="/updating-arrays-in-state" 
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        UpdateArray
      </NavLink>

      <NavLink 
        to="/updating-arrays-in-state-part-2" 
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        UpdateArray_2
      </NavLink>

      <NavLink 
        to="/update-array-in-state-challenges" 
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        ArrayChallenge
      </NavLink>
    </div>
  )
}

export default Navbar
