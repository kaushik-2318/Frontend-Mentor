import { useState } from 'react'
import data from '../data.json'

function Crew() {

  const [crewMember, setCrewMember] = useState(data.crew[0])
  const [activeCrew, setActiveCrew] = useState(0)

  const handleCick = (event) => {
    const index = (event.target.getAttribute('data-index'));
    setCrewMember(data.crew[index])
    setActiveCrew(index)
  }

  return (
    <>
      <div className="bg-[url('../../src/assets/crew/background-crew-desktop.jpg')] bg-no-repeat bg-cover bg-center h-full w-full pb-10 md:pb-0 lg:h-screen">

        <div className='flex justify-center items-center flex-col w-full'>


          <p className='uppercase text-[16px] lg:text-[28px] tracking-[2.7px] lg:tracking-[4.72px] font-Barlow text-white pb-20 w-full text-center md:text-left md:pl-20 pt-24 lg:pt-40'>
            <span className="font-bold text-[rgba(255,255,255,.25)]">02</span> MEET yor crew
          </p>


          <div className='flex justify-center items-start lg:items-center flex-col md:flex-col-reverse lg:flex-row-reverse lg:gap-10 lg:w-full'>

            <div className='w-[327px] h-[223px] md:w-full md:h-[300px] lg:h-[400px] flex justify-center items-center lg:w-1/2'>
              <img className='border-b-3 border-[#ffffff40] w-[177.12px] md:w-[250px] md:h-[300px] h-[222px] lg:w-[400px] lg:h-[400px]' src={crewMember.images.webp} alt="" />
            </div>

            <div className='flex justify-center items-center flex-col  md:flex-col-reverse w-full pt-10 lg:w-1/2'>
              <div className='text-white text-9xl w-full gap-5 my-10 flex justify-center items-center'>
                <div data-index={0} onClick={handleCick} className={`w-4 h-4 lg:w-4 lg:h-4 md:w-2 md:h-2 hover:bg-white duration-500 rounded-full cursor-pointer ${activeCrew == 0 ? "bg-white" : "bg-[rgba(255,255,255,.1744)]"}`}></div>
                <div data-index={1} onClick={handleCick} className={`w-4 h-4 lg:w-4 lg:h-4 md:w-2 md:h-2 hover:bg-white duration-500 rounded-full cursor-pointer ${activeCrew == 1 ? "bg-white" : "bg-[rgba(255,255,255,.1744)]"}`}></div>
                <div data-index={2} onClick={handleCick} className={`w-4 h-4 lg:w-4 lg:h-4 md:w-2 md:h-2 hover:bg-white duration-500 rounded-full cursor-pointer ${activeCrew == 2 ? "bg-white" : "bg-[rgba(255,255,255,.1744)]"}`}></div>
                <div data-index={3} onClick={handleCick} className={`w-4 h-4 lg:w-4 lg:h-4 md:w-2 md:h-2 hover:bg-white duration-500 rounded-full cursor-pointer ${activeCrew == 3 ? "bg-white" : "bg-[rgba(255,255,255,.1744)]"}`}></div>
              </div>



              <div className='flex flex-col gap-2 justify-center items-center'>
                <div className='font-Bellefair uppercase text-[16px] lg:text-[32px] text-[rgba(255,255,255,.5)] text-center'>
                  {crewMember.role}
                </div>
                <div className='font-Bellefair uppercase text-[24px] lg:text-[56px] text-[rgba(255,255,255,1)] w-[327px] lg:w-[620px] text-center'>
                  {crewMember.name}
                </div>
                <div className='font-Barlow text-[15px] lg:text-[18px] leading-[25px] lg:leading-[32px] text-lavenderBlue w-[327px] lg:w-[400px] text-justify  lg:h-32'>
                  {crewMember.bio}
                </div>
              </div>

            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default Crew
