import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeafletMap from './LeafletMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='tracker-section'>
      <div className='tracker-hero-section'>
        <h1 className='primary-heading'>IP Address Tracker</h1>
        <div className='search-container'>
          <input className='search-input' type='text' placeholder='Enter IP Address' />
          <button className='btn search-btn'><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
      </div>
      <div className='tracker-map-container '>


        <LeafletMap />

      </div>
      <div className='tracker-results-container'>
        <div className='tracker-result-textbox'>
          <p className='result-title'>IP ADDRESS</p>
          <p className='result-content'>192.168.8.1</p>
        </div>
        <div className='tracker-result-textbox'>
          <p className='result-title'>LOCATION</p>
          <p className='result-content'>Brooklyn, NY 10001</p>
        </div>
        <div className='tracker-result-textbox'>
          <p className='result-title'>TIMEZONE</p>
          <p className='result-content'>UTC -05:00</p>
        </div>
        <div className='tracker-result-textbox'>
          <p className='result-title'>ISP</p>
          <p className='result-content'>SpaceX StarLink</p>
        </div>

      </div>



    </section>
  )
}

export default App
