import React, { useContext, useState } from 'react';
import dollar from '../assets/icons/icon-dollar.svg'

function Amount({setBill}) {
    const bill = function (e) {
        setBill(e.target.value)
    }
    return (

        <div className="flex flex-col relative">
            <div className='mb-3 font-bold'>Bill</div>
            <input onChange={bill} className="border-2 bg-[#f3f8fb] p-1 rounded-md text-[24px] font-[700] text-right text-[#00474b]" placeholder='Enter' type="number" />
            <div className='absolute top-[3.2rem] left-[.5rem]'>
                <img src={dollar} alt="Icon" />
            </div>
        </div>
    )
}
export default Amount
