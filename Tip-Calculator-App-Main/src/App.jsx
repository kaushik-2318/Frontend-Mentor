import React, { useState } from 'react';
import logo from './assets/icons/logo.svg'
import Panel from './components/panel'

function App() {
  const [bill, setBill] = useState(0);
  const [people, setpeople] = useState(0);
  const [tip, setTip] = useState(0);

  return (
    <>
      <div className='flex flex-col bg-[#c5e4e7] justify-center items-center h-screen w-screen md:grid md:place-items-center'>
        <div>
          <img className='p-20 md:p-0' src={logo} alt="" />
        </div>
        <div className='border-2 border-red-900'>
          <Panel bill={bill} people={people} setpeople={setpeople} setBill = {setBill} tip={tip} setTip={setTip}/>
        </div>
      </div>
      {/* <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Kaushik Verma</a>.
      </div> */}

    </>
  )
}

export default App
