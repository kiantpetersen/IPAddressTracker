import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './queries.css'
import LeafletMap from './LeafletMap'

function App() {
  const [searchIp, setIp] = useState('')
  const [errorMsg, setErr] = useState({ status: false, msg: '' })
  const [coords, setCoords] = useState([0, 0])
  const [data, setData] = useState({
    ip: '',
    isp: '',
    location: {
      country: '',
      region: '',
      timezone: '00:00'
    },
  })

  const apiKey = import.meta.env.VITE_API_KEY


  useEffect(() => {
    // Fetch the IP address using a third-party service
    fetch('https://httpbin.org/ip')
      .then(response => response.json())
      .then(data => {
        setIp(data.origin)
        trackAddress(data.origin)
      });
  }, []);
  function APICall(ipAddress) {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data)
        setCoords([data.location.lat, data.location.lng])
      });

  }
  function validateIP(address) {
    let addArr = address.split('.')
    let res = true
    if (addArr.length === 4) {
      addArr.forEach(num => {
        if (Number(num) > 0 && Number(num) < 256) {
          res = true
        } else {
          res = false
          return
        }
      })

    } else {
      res = false
    }
    return res
  }
  function trackAddress(initIp) {


    if (initIp.length) {
      APICall(initIp)
    } else {
      const flag = validateIP(searchIp)
      if (flag === false) {
        setErr(() => {
          return { status: true, msg: 'Input Invalid: Please Enter a valid IP address' }
        })
        return
      } else {
        APICall(searchIp)
        setErr(() => {
          return { status: false, msg: '' }
        })
      }
    }
  }
  function getErr() {
    return <div className='error-container'>
      <p className='error-text'>{errorMsg.msg}</p>
    </div>
  }

  function handleChange(e) {
    e.preventDefault();
    setIp(e.target.value)
  }

  return (
    <section className='tracker-section'>
      <div className='tracker-hero-section'>
        <h1 className='primary-heading'>IP Address Tracker</h1>
        {/* {getErr()} */}
        {errorMsg.status === true ? getErr() : null}

        <div className='search-container'>
          <input value={searchIp} onChange={handleChange} className='search-input' type='text' placeholder='Enter IP Address' />
          <button onClick={trackAddress} className='btn search-btn'><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
      </div>
      <div className='tracker-map-container '>
        <LeafletMap coords={coords} />
      </div>
      <div className='tracker-results-container'>
        <div className='tracker-result-textbox'>
          <p className='result-title'>IP ADDRESS</p>
          <p className='result-content'>{data.ip}</p>
        </div>
        <div className='tracker-result-textbox'>
          <p className='result-title'>LOCATION</p>
          <p className='result-content'>{data.location.country + ', ' + data.location.region}</p>
        </div>
        <div className='tracker-result-textbox'>
          <p className='result-title'>TIMEZONE</p>
          <p className='result-content'>UTC {data.location.timezone}</p>
        </div>
        <div className='tracker-result-textbox'>
          <p className='result-title'>ISP</p>
          <p className='result-content'>{data.isp}</p>
        </div>

      </div>



    </section>
  )
}

export default App
