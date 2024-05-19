import React, { useState } from "react"
import './Style.css'

function tip() {
    const handleSelectedTip = (e) => {
        setTip(+e.target.value);
      }
    return (
        <div>
            <div className='mb-3'>Select Tip %</div>
            <div className="tip-section">
                <div className='tip-amount'>
                    <input name="tip" onInput={handleSelectedTip} value=".5" type="radio" />
                    <div className="tip-btn">5%</div>
                </div>
                <div className='tip-amount'>
                    <input name="tip" onInput={handleSelectedTip} value=".1" type="radio" />
                    <div className="tip-btn">10%</div>
                </div>
                <div className='tip-amount'>
                    <input name="tip" onInput={handleSelectedTip} value=".15" type="radio" />
                    <div className="tip-btn">15%</div>
                </div>
                <div className='tip-amount'>
                    <input name="tip" onInput={handleSelectedTip} value=".25" type="radio" />
                    <div className="tip-btn">25%</div>
                </div>
                <div className='tip-amount'>
                    <input name="tip" onInput={handleSelectedTip} value=".50" type="radio" />
                    <div className="tip-btn">50%</div>
                </div>
                <input type="number" className='text-right border-2 rounded-md p-[.65rem] bg-[#f3f8fb] w-[47%] font-bold text-[#3c4848] text-[1.3rem]' placeholder='Custom' />
                {/* <div onClick={handleClick} className='bg-[#002b2d] text-white font-bold rounded-md p-4 w-[47%] text-center'>5%</div>
                <div onClick={handleClick} className='bg-[#002b2d] text-white font-bold rounded-md p-4 w-[47%] text-center'>10%</div>
                <div onClick={handleClick} className='bg-[#002b2d] text-white font-bold rounded-md p-4 w-[47%] text-center'>15%</div>
                <div onClick={handleClick} className='bg-[#002b2d] text-white font-bold rounded-md p-4 w-[47%] text-center'>25%</div>
                <div onClick={handleClick} className='bg-[#002b2d] text-white font-bold rounded-md p-4 w-[47%] text-center'>50%</div> */}
            </div>
        </div>
    )
}

export default tip
