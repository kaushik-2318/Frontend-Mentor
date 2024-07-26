import { useState } from 'react'
import data from '../data.json'
function Technology() {

  const [tech, setTech] = useState(data.technology[0]);
  const [activeTechnology, setActiveTechnology] = useState(1)

  const handleCick = (e) => {
    const text = Number(e.target.textContent.toLowerCase()) - 1;
    setTech(data.technology[text]);
    setActiveTechnology(text + 1)
  }
  return (
    <>
      <div className="bg-[url('../../src/assets/technology/background-technology-mobile.jpg')] md:bg-[url('../../src/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('../../src/assets/technology/background-technology-desktop.jpg')] bg-no-repeat bg-cover bg-center h-full w-full pb-10">
        <div className='flex justify-center lg:justify-start items-center lg:items-start flex-col pt-24 gap-10 lg:pt-40'>

          <p className='uppercase text-[16px] md:text-[20px] tracking-[2.7px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px] font-Barlow text-white lg:pl-52 lg:pb-20'>
            <span className="font-bold text-[rgba(255,255,255,.25)]">03</span> space launch 101
          </p>

          <div className='flex justify-center lg:justify-end items-center gap-10 lg:gap-40 flex-col-reverse lg:flex-row'>

            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:w-1/2 gap-10'>

              <div className='flex justify-center items-center flex-row lg:flex-col gap-10 lg:w-1/2'>
                <div onClick={handleCick} className={`border-2 border-[rgba(255,255,255,.25)] hover:border-white rounded-full p-5 w-20 h-20 flex justify-center items-center font-Bellefair text-[32px] tracking-[2px] ${activeTechnology == 1 ? "bg-white text-black" : "text-white"}`}>1</div>
                <div onClick={handleCick} className={`border-2 border-[rgba(255,255,255,.25)] hover:border-white rounded-full p-5 w-20 h-20 flex justify-center items-center font-Bellefair text-[32px] tracking-[2px] ${activeTechnology == 2 ? "bg-white text-black" : "text-white"}`}>2</div>
                <div onClick={handleCick} className={`border-2 border-[rgba(255,255,255,.25)] hover:border-white rounded-full p-5 w-20 h-20 flex justify-center items-center font-Bellefair text-[32px] tracking-[2px] ${activeTechnology == 3 ? "bg-white text-black" : "text-white"}`}>3</div>
              </div>

              <div className='flex justify-center items-center flex-col gap-5 lg:gap-1 w-full'>
                <div className="font-Barlow text-[14px] md:text-[16px] tracking-[2.36px] md:tracking-[2.7px] text-lavenderBlue">THE TERMINOLOGY…</div>
                <div className="font-Bellefair text-[40px] lg:text-[56px] text-white uppercase lg:w-[500px]">
                  {tech.name}
                </div>
                <div className="font-Barlow text-[15px] md:text-[16px] leading-[25px] md:leading-[28px] lg:text-[18px] lg:leading-[32px] text-lavenderBlue text-justify px-10 lg:px-0 lg:w-2/3">
                  {tech.description}
                </div>
              </div>

            </div>

            <div className='w-full lg:w-96'>
              <img className='hidden lg:inline' src={tech.images.portrait} alt="" />
              <img className='lg:hidden w-full' src={tech.images.landscape} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Technology
