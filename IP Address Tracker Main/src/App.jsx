import './App.css'
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from 'react'
import L from 'leaflet'
import PropTypes from 'prop-types';
import background from './assets/pattern-bg-desktop.png'
import iconUrl from './assets/icon-location.svg'
import arrow from './assets/icon-arrow.svg'


const icon = L.icon({
  iconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


function App() {
  const [initialdata, setInitialdata] = useState('');
  const [newIP, setNewIP] = useState("")
  const ipRegex = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/;
  const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]{1,63}\.)+[a-zA-Z]{2,6}$/;

  const apiKey = import.meta.env.VITE_API_KEY;



  useEffect(() => {

    const getInitialdata = async () => {
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=8.8.8.8`)

      const data = await res.json();
      setInitialdata(data)
    }
    getInitialdata()

  }, [apiKey])

  const getNewdata = async () => {
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${ipRegex.test(newIP) ? `ipAddress=${newIP}` : `${domainRegex.test(newIP) ? `&domain=${newIP}` : ""}`}`)

    const data = await res.json();
    setInitialdata(data)
  }

  function handleSubmit(e) {
    e.preventDefault();
    getNewdata()
  }

  ChangeView.propTypes = {
    center: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  const position = initialdata && initialdata.location ? [initialdata.location.lat, initialdata.location.lng] : [0, 0];
  function ChangeView({ center }) {
    const map = useMap();
    useEffect(() => {
      map.flyTo(center, 13);
    }, [center, map]);
    return null;
  }

  return (
    <>
      <div className='md:h-screen'>
        <div className="absolute w-full -z-10">
          <img src={background} className="w-full h-80" />
        </div>

        <div className={`flex justify-start items-center flex-col  w-full text-white pt-5 gap-5 h-56`}>
          <div className='text-2xl md:text-3xl'>
            IP Address Tracker
          </div>
          <form onSubmit={handleSubmit} className='flex justify-center items-center md:w-[30%] h-12' action="">
            <input onChange={(e) => setNewIP(e.target.value)} className=' h-full rounded-l-2xl text-black p-5 outline-none cursor-pointer w-full' type="text" placeholder='Search for any IP address or domain' value={newIP} />
            <button type='submit' className='bg-black hover:bg-[--VeryDarkGray] h-full flex justify-center items-center w-14 rounded-r-2xl cursor-pointer duration-300'>
              <img src={arrow} alt="Arrow" />
            </button>
          </form>

          <div className='bg-white absolute rounded-xl p-3 max-w-6xl mx-auto grid md:grid-cols-5 gap-5 text-[--DarkGray] mt-36 text-center md:text-left' style={{ zIndex: 999 }}>
            <div className='uppercase font-semibold text-sm md:border-r-2 px-5'>
              IP Address
              <div className='text-black font-semibold text-lg capitalize'>
                {initialdata ? initialdata.ip : 'Loading...'}
              </div>
            </div>
            <div className='uppercase font-semibold text-sm md:border-r-2 px-5'>
              Location
              <div className='text-black font-semibold text-lg capitalize'>
                {initialdata && initialdata.location ? `${initialdata.location.city}, ${initialdata.location.country}` : 'Loading...'}
                <br />
                {initialdata && initialdata.location ? initialdata.location.postalCode : 'Loading...'}
              </div>
            </div>
            <div className='uppercase font-semibold text-sm md:border-r-2 px-5'>
              Timezone
              <div className='text-black font-semibold text-lg capitalize'>
                {initialdata && initialdata.location ? `UTC ${initialdata.location.timezone}` : 'Loading...'}
              </div>
            </div>

            <div className='uppercase font-semibold text-sm px-5'>
              ISP
              <div className='text-black font-semibold text-lg capitalize'>
                {initialdata ? initialdata.isp : 'Loading...'}
              </div>
            </div>
          </div>
        </div>

        <MapContainer className='md:h-[63vh] h-screen w-full' center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {initialdata && <Marker icon={icon} position={position}>
            <Popup>This is the location of the IP Address or Domain</Popup>
          </Marker>}
          {initialdata && <ChangeView center={position} />}
        </MapContainer>
      </div>
    </>
  )
}

export default App
