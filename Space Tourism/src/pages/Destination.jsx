import { useEffect, useState } from 'react'
import data from '../data.json'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

function Destination() {
    const [destination, setDestination] = useState(0);
    const [activeDestination, setActiveDestination] = useState("moon");

    const handleCick = (e) => {
        const title = e.target.textContent.toLowerCase();
        const index = data.destinations.findIndex((item) => item.name.toLowerCase() === title);
        setDestination(index);
        setActiveDestination(title);
    }

    return (
        <>
            <div className={`bg-[url('../../src/assets/destination/background-destination-mobile.jpg')] md:bg-[url('../../src/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('../../src/assets/destination/background-destination-desktop.jpg')] bg-no-repeat bg-cover bg-center h-full w-full flex justify-center items-center md:items-start flex-col lg:block`}>
                <p className='uppercase text-[16px] md:text-[20px] lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] font-Barlow text-white pt-28 lg:pt-52 md:pl-20 lg:pl-40 pb-10'>
                    <span className="font-bold text-[rgba(255,255,255,.25)]">01</span> Pick  Your Destination
                </p>

                <div className='flex justify-center lg:justify-around items-center font-Barlow text-lavenderBlue flex-col lg:flex-row w-full gap-10'>
                    <div className='w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]'>
                        <img className='image' src={data.destinations[destination].webp} alt="Moon" />
                    </div>
                    <div className='flex justify-center items-center lg:items-left w-[445px] h-[472px] flex-col gap-6'>
                        <nav className='w-[237.5px] md:w-[285.5px]'>
                            <ul className='uppercase flex justify-between items-center text-[14px] lg:text-[16px] tracking-[2.7px]'>
                                <li className={`cursor-pointer hover:border-b-2 border-[rgba(255,255,255,.5)] h-9 ${activeDestination === 'moon' ? 'border-b-2 border-white' : ''}`} onClick={handleCick}>moon</li>
                                <li className={`cursor-pointer hover:border-b-2 border-[rgba(255,255,255,.5)] h-9 ${activeDestination === 'mars' ? 'border-b-2 border-white' : ''}`} onClick={handleCick}>mars</li>
                                <li className={`cursor-pointer hover:border-b-2 border-[rgba(255,255,255,.5)] h-9 ${activeDestination === 'europa' ? 'border-b-2 border-white' : ''}`} onClick={handleCick}>europa</li>
                                <li className={`cursor-pointer hover:border-b-2 border-[rgba(255,255,255,.5)] h-9 ${activeDestination === 'titan' ? 'border-b-2 border-white' : ''}`} onClick={handleCick}>titan</li>
                            </ul>
                        </nav>
                        <div className='uppercase text-[56px] md:text-[80px] lg:text-[100px] text-white font-Bellefair'>{data.destinations[destination].name}</div>
                        <div className='text-justify text-[15px] md:text-[16px] lg:text-[18px] text-lavenderBlue leading-[25px] md:leading-[28px] lg:leading-[32px] lg:h-52 w-[327px] h-[125px] md:w-full md:h-full'>{data.destinations[destination].description}</div>
                        <div className='w-full'><hr className='w-full' /></div>
                        <div className='flex justify-center lg:justify-between items-center w-full uppercase flex-col md:flex-row gap-10'>
                            <div className='flex justify-center items-center flex-col'>
                                <div className='font-Barlow text-[14px] tracking-[2.36px]'>avg. distance</div>
                                <div className='font-Barlow text-[28px] text-white tracking-wider'>{data.destinations[destination].distance}</div>
                            </div>
                            <div className='flex justify-center items-center flex-col '>
                                <div className='font-Barlow text-[14px] tracking-[2.36px]'>est. travel time</div>
                                <div className='font-Barlow text-[28px] text-white tracking-wider'> {data.destinations[destination].travel}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destination
