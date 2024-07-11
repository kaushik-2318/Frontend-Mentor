import { useState } from 'react'

import illustrationintro from './assets/illustration-intro.svg'
import anisha from './assets/avatar-anisha.png'
import ali from './assets/avatar-ali.png'
import richard from './assets/avatar-richard.png'
import shanai from './assets/avatar-shanai.png'


import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/modules';



import './App.css'

function App() {

  const [isopen, setIsopen] = useState(false);


  const peoples = [{
    name: "Anisha Li",
    text: " “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    img: anisha
  }, {
    name: "Ali Bravo",
    text: "“We have been able to cancel so many other subscriptions since using Manage.There is no more cross- channel confusion and everyone is much more focused.”",
    img: ali
  }, {
    name: "Richard Watts",
    text: "“Manage allows us to provide structure and process. It keeps us organized and focused.I can’t stop recommending them to everyone I talk to!”",
    img: richard
  }, {
    name: "Shanai Gough",
    text: "“Their software allows us to track, manage and collaborate on our projects from anywhere.It keeps the whole team in-sync without being intrusive.”",
    img: shanai
  }]

  return (
    <>
      <div>
        <NavBar panel={isopen} setPanelOpen={setIsopen} />
        <main className="background md:h-screen flex justify-center items-center md:p-28 py-10 px-12 gap-10 overflow-hidden flex-col-reverse md:flex-row">
          <div className="md:w-1/2 h-full flex md:justify-end md:items-start justify-center items-center flex-col">
            <div className="md:text-6xl text-4xl font-bold text-[var(--DarkBlue)] text-center md:text-left">
              Bring everyone together to build better products.
            </div>
            <div className="py-10 text-justify text-[var(--DarkGrayishBlue)] md:w-[60%]">
              Manage makes it simple for software teams to plan day-to-day
              tasks while keeping the larger team goals in view.
            </div>
            <div>
              <button className={`rounded-full text-[var(--VeryLightGray)] hover:bg-[var(--clr-accent-300)] bg-[var(--BrightRed)] outline-none px-5 py-3 text-white shadow-2xl w-full`}>
                Get Started
              </button >
            </div>
          </div>

          <div className="md:w-1/2 w-full flex justify-center items-center md:h-full">
            <img className="md:w-[80%]" src={illustrationintro} alt="Illustration Intro" />
          </div>
        </main>


        <section className="backgroundabout flex md:justify-start items-center justify-center md:px-28 py-28 gap-10 md:h-screen md:flex-row flex-col">
          <div className="md:w-1/2 w-full h-full flex justify-center items-left flex-col px-10">
            <div className="md:text-6xl text-3xl font-bold text-[var(--DarkBlue)] md:text-left text-center">
              What’s different about Manage?
            </div>
            <div className="py-10 text-justify text-[var(--DarkGrayishBlue)] md:w-[60%] ">
              Manage provides all the functionality your team needs, without
              the complexity. Our software is tailor-made for modern digital
              product teams.
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center gap-10 h-full flex-col pl-5 text-[var(--DarkGrayishBlue)]">
            <div>
              <div className="flex justify-start items-center flex-row md:gap-8 gap-2 rounded-l-full bg-[var(--VeryPaleRed)] md:bg-transparent mb-5">
                <div className="w-20">
                  <button className={`rounded-full text-[var(--VeryLightGray)] bg-[var(--BrightRed)] outline-none px-5 py-3 text-white shadow-2xl w-full`}>
                    01
                  </button >
                </div>
                <div className="text-[var(--DarkBlue)] font-bold">Track company-wide progress</div>
              </div>
              <p className="md:pl-28 text-justify pr-10">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture again.
              </p>
            </div>

            <section>
              <div className="flex justify-start items-center flex-row md:gap-8 gap-2 rounded-l-full bg-[var(--VeryPaleRed)] md:bg-transparent mb-5">
                <div className="w-20">
                  <button className={`rounded-full text-[var(--VeryLightGray)] bg-[var(--BrightRed)] outline-none px-5 py-3 text-white shadow-2xl w-full`}>
                    02
                  </button >
                </div>
                <div className="text-[var(--DarkBlue)] font-bold">Advanced built-in reports</div>
              </div>
              <p className="md:pl-28 text-justify pr-10">
                Set internal delivery estimates and track progress toward company
                goals. Our customisable dashboard helps you build out the reports
                you need to keep key stakeholders informed.
              </p>
            </section>
            <div>
              <div className="flex justify-start items-center flex-row md:gap-8 gap-2 rounded-l-full bg-[var(--VeryPaleRed)] md:bg-transparent mb-5">
                <div className="w-20">
                  <button className={`rounded-full text-[var(--VeryLightGray)] bg-[var(--BrightRed)] outline-none px-5 py-3 text-white shadow-2xl w-full`}>
                    03
                  </button >
                </div>
                <div className="text-[var(--DarkBlue)] font-bold">Everything you need in one place</div>
              </div>
              <p className="md:pl-28 text-justify pr-10">
                Stop jumping from one service to another to communicate, store files,
                track tasks and share documents. Manage offers an all-in-one team
                productivity solution.
              </p>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center flex-col gap-28 z-[-4]">
          <div className="md:text-5xl text-4xl font-bold text-[var(--DarkBlue)] text-center">
            What they’ve said
          </div>

            <Swiper slidesPerView={3} spaceBetween={30} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper">
              {peoples.map((people, index) => (
                <SwiperSlide className='flex justify-center items-center flex-col min-w-96' key={index}>
                  <div>
                    <img className='w-14 h-14' src={people.img} alt="Profile Picture" />
                  </div>
                  <div className='font-bold text-[var(--DarkBlue)]'>
                    {people.name}
                  </div>
                  <div className='text-center text-[var(--DarkGrayishBlue)] text-sm'>
                    {people.text}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>


          <div>
            <button className={`rounded-full text-[var(--VeryLightGray)] hover:bg-[var(--clr-accent-300)] bg-[var(--BrightRed)] outline-none px-5 py-3 text-white shadow-2xl w-full`}>
              Get Started
            </button >
          </div>
        </section >

        <section className="cta md:h-60 bg-[var(--BrightRed)] md:gap-80 flex md:justify-around items-center mt-20 justify-center md:flex-row flex-col md:p-0 p-10 gap-10 h-96">
          <div className='text-white font-bold text-4xl md:w-1/3 text-center'>
            Simplify how your team works today.
          </div>
          <div>
            <button className={`rounded-full text-[var(--BrightRed)] bg-[var(--VeryLightGray)] outline-none px-5 py-3 shadow-2xl w-full font-bold`}>
              Get Started
            </button >
          </div>
        </section>


        <Footer />


        <div className='attribution'>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://portfolio-six-teal-24.vercel.app/">Kaushik Verma</a>.
        </div>
      </div >
    </>
  )
}

export default App
