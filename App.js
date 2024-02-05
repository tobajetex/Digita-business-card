import React from 'react'
import Info from './Components/info'
import About from './Components/about'
import Interest from './Components/interest'
import Footer from './Components/footer'

export default function App() {
  return (
    <div className="app-container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}
