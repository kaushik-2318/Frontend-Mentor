function Home() {
    return (
        <>
            <div className={`bg-[url('../../src/assets/home/background-home-mobile.jpg')] md:bg-[url('../../src/assets/home/background-home-tablet.jpg')] lg:bg-[url('../../src/assets/home/background-home-desktop.jpg')] bg-no-repeat bg-cover bg-center h-screen md:h-full  lg:h-screen w-full`}>
                <div className='flex justify-center lg:justify-around items-center font-Barlow text-lavenderBlue pt-36 lg:pt-52 flex-col lg:flex-row gap-10'>
                    <div className=" flex justify-center items-center lg:items-start flex-col gap-5 md:gap-3 lg:gap-32">
                        <p className='uppercase text-[16px] md:text-[20px] lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]'>
                            So, you want to travel to
                        </p>
                        <p className='uppercase text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] lg:leading-[0px] font-Bellefair text-white'>
                            Space
                        </p>
                        <p className='text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] md:leading-[28px] lg:leading-8 w-80 md:w-[300px] lg:w-96 text-center lg:text-justify'>
                            Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <a href='/destination'>
                        <div className='flex justify-center items-center group/expand h-[150px] md:h-[242px] lg:h-[274px] w-[150px] md:w-[242px] lg:w-[274px] relative'>
                            <button className='lg:absolute top-5 uppercase z-[2] text-richBlack bg-white h-[150px] md:h-[242px] lg:h-[274px] w-[150px] md:w-[242px] lg:w-[274px] rounded-full font-Bellefair text-[20px] md:text-[32px] tracking-[1.25px] md:tracking-[2px]'>
                                Explore
                            </button>
                            <div className='hidden lg:block absolute z-[1] bg-[#ffffff1c] w-[0px] h-[0px] rounded-full mt-8 group-hover/expand:w-[450px] group-hover/expand:h-[450px] duration-200'></div>
                        </div>
                    </a>
                </div>
            </div >
        </>
    )
}

export default Home
