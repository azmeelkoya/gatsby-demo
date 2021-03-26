import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <Link to="/"><h1>SurveySparrow</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/nps-benchmarks">NPS Benchmarks</Link>
      </div>
    </nav>
  )
}