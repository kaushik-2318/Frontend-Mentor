import React, { useEffect, useState } from 'react';
import logo from './assets/logo.svg'
import dollar from './assets/icon-dollar.svg'
import person from './assets/icon-person.svg'
import './app.css'

function App() {
  const [billAmt, setBillAmt] = useState(0);
  const [isTipSelected, setisTipSelected] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [people, setpeople] = useState(0);

  const [billAmtError, setBillAmtError] = useState(false);
  const [peopleError, setPeopleError] = useState(false);

  const [calculatedTip, setCalculatedTip] = useState(0);
  const [calculatedTotal, setCalculatedTotal] = useState(0);

  const handleBill = (e) => {
    const input = e.target.value;
    const pattern = /^\d+(\.\d{1,2})?$/;

    if (pattern.test(input)) {
      setBillAmtError(false);
      setBillAmt(input);
    }
    else {
      setBillAmtError(true);
    }
  }

  const handleTip = (e) => {
    setisTipSelected(e.target.value);
  }
  const customtip = (e) => {
    setCustomTip(e.target.value);
  }

  const handlepeople = (e) => {
    const input = e.target.value;
    const pattern = /^[1-9]\d*$/;
    if (pattern.test(input)) {
      setpeople(input);
      setPeopleError(false);
    }
    else {
      setPeopleError(true);
    }
  }

  const calculateTip = () => {
    if (customTip > 0) {
      setCalculatedTip(((billAmt * customTip / 100) / people).toFixed(2));
    }
    else {
      setCalculatedTip(((billAmt * isTipSelected) / people).toFixed(2));
    }
  }

  const calculateTotal = () => {
    if (customTip > 0) {
      setCalculatedTotal(((Number(billAmt) + Number(billAmt * customTip / 100)) / people).toFixed(2));
    }
    else {
      setCalculatedTotal(((Number(billAmt) + Number(billAmt * isTipSelected)) / people).toFixed(2));
    }
  }

  const reset = () => {
    setBillAmt(0);
    setBillAmtError(false);
    setisTipSelected(0);
    setCustomTip(0);
    setpeople(0);
    setPeopleError(false);
    setCalculatedTip(0);
    setCalculatedTotal(0);
  }
  useEffect(() => {
    if (billAmt > 0 && people > 0 && (isTipSelected > 0 || customTip > 0)) {
      calculateTip();
      calculateTotal();
    }
    else {
      setCalculatedTip(0);
      setCalculatedTotal(0);
    }
  }, [billAmt, isTipSelected, people, customTip, reset])
  return (
    <>
      <form>
        <div className="bg-LightGrayishCyan py-10 md:py-0 md:h-screen w-screen flex justify-center items-center flex-col gap-10">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className='bg-White md:h-[70%] max-h-[500px] max-w-[1000px] md:rounded-2xl rounded-3xl w-full  md:w-7/12 flex md:flex-row flex-col justify-center items-center md:p-6 py-6 gap-10'>
            <div className='md:w-1/2 w-[85%] grid grid-row-3 grid-flow-row gap-10'>
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center'>
                  <div className='font-semibold'>Bill</div>
                  <div className='text-sm w-52 text-right text-red-500'>{billAmtError ? "Please Enter in Proper Formate (00.00)" : ""}</div>
                </div>
                <div className='relative'>
                  <img className='absolute top-5 left-4' src={dollar} alt="dollar" />
                  <input className='border-2 focus:outline-none focus:border-StrongCyan focus:text-VeryDarkCyan font-bold text-xl w-full text-right bg-VeryLightGrayishCyan p-3 rounded-xl' onInput={handleBill} type="number" placeholder='0' />
                </div>
              </div>

              <div className='flex flex-col gap-5'>
                <div className='font-semibold'>Select Tip %</div>
                <div className='grid md:grid-rows-2 md:grid-flow-col md:grid-cols-3 grid-rows-3 grid-cols-2 grid-flow-row gap-5 text-White font-bold text-xl'>

                  <div className='relative text-center'>
                    <input className='absolute opacity-0 inset-0 ' type="radio" name="tip" onChange={handleTip} value="0.05" />
                    <div className='tip-btn border-2 p-2 bg-VeryDarkCyan rounded-xl hover:bg-red-900'>5%</div>
                  </div>

                  <div className='relative text-center'>
                    <input className='absolute opacity-0 inset-0' type="radio" name="tip" onChange={handleTip} value="0.10" />
                    <div className='tip-btn border-2 p-2 bg-VeryDarkCyan rounded-xl hover:bg-red-900'>10%</div>
                  </div>

                  <div className='relative text-center'>
                    <input className='absolute opacity-0 inset-0' type="radio" name="tip" onChange={handleTip} value="0.15" />
                    <div className='tip-btn border-2 p-2 bg-VeryDarkCyan rounded-xl'>15%</div>
                  </div>

                  <div className='relative text-center'>
                    <input className='absolute opacity-0 inset-0' type="radio" name="tip" onChange={handleTip} value="0.25" />
                    <div className='tip-btn border-2 p-2 bg-VeryDarkCyan rounded-xl'>25%</div>
                  </div>

                  <div className='relative text-center'>
                    <input className='absolute opacity-0 inset-0' type="radio" name="tip" onChange={handleTip} value="0.5" />
                    <div className='tip-btn border-2 p-2 bg-VeryDarkCyan rounded-xl'>50%</div>
                  </div>

                  <div className='relative'>
                    <input name="tip" onInput={customtip} className='border-2 p-2 text-right bg-VeryLightGrayishCyan rounded-xl w-full text-DarkGrayishCyan focus:text-VeryDarkCyan focus:outline-none focus:border-StrongCyan' type="number" placeholder='Custom' />
                  </div>

                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center'>
                  <div className='font-semibold'>Number of People</div>
                  <div className='text-sm w-52 text-right text-red-500'>{peopleError ? "Can't be Zero" : ""}</div>
                </div>
                <div className='relative'>
                  <img className='absolute top-5 left-4' src={person} alt="person" />
                  <input className='border-2 focus:outline-none focus:border-StrongCyan focus:text-VeryDarkCyan font-bold text-xl w-full text-right bg-VeryLightGrayishCyan p-3 rounded-xl' onInput={handlepeople} type="number" placeholder='0' />
                </div>
              </div>
            </div>


            <div className='bg-VeryDarkCyan text-white h-full md:w-1/2 w-[85%] rounded-2xl flex flex-col justify-between p-10 gap-10 md:gap-0' >
              <div className='flex flex-col md:gap-10 gap-5'>
                <div className='flex justify-between items-center'>
                  <div>
                    <div className='text-xl'>Tip Amount</div>
                    <div className='text-sm text-GrayishCyan font-bold'>/ person</div>
                  </div>
                  <div className='text-StrongCyan font-bold text-5xl'>
                    ${calculatedTip}
                  </div>
                </div>

                <div className='flex justify-between items-center'>
                  <div>
                    <div className='text-xl'>Total</div>
                    <div className='text-sm text-GrayishCyan font-bold'>/ person</div>
                  </div>
                  <div className='text-StrongCyan font-bold text-5xl'>
                    ${calculatedTotal}
                  </div>
                </div>
              </div>
              {
                calculatedTotal ?
                  (<button type='reset' onClick={reset} className='bg-[#0d686d] hover:bg-StrongCyan hover:text-VeryDarkCyan p-3 rounded-lg text-center font-bold tracking-wider'>
                    RESET
                  </button>) : (<button type='reset' disabled className='bg-[#0d686d] p-3 rounded-lg text-center font-bold tracking-wider'>
                    RESET
                  </button>)
              }

            </div>
          </div>

          <div className="text-center">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">Kaushik Verma</a>.
          </div>
        </div>
      </form>
    </>
  )
}

export default App
