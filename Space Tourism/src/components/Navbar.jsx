import Logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';


export default function Navbar() {
    const [openModal, isOpenModal] = useState(false);

    const handleclick = () => {
        isOpenModal(!openModal);
    }
    return (
        <>
            <div className='flex justify-between items-center fixed w-full text-white pt-10 md:pt-0 lg:pt-10'>
                {/* logo */}
                <div className='pl-10'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='md:hidden pr-10' style={{ display: openModal ? "absolute" : "hidden" }}>
                    <img onClick={handleclick} src={hamburger} alt="" />
                </div>

                <div className='hidden md:flex justify-center items-center'>
                    {/* line */}
                    <div className='hidden lg:inline relative w-[473px]'>
                        <hr className='w-full absolute -right-6 z-10' />
                    </div>
                    {/* Link */}
                    <div className='hidden md:flex justify-center items-center backdrop-filter backdrop-blur-xl bg-[rgba(255,255,255,.1)] md:gap-10 lg:gap-16 md:px-20 lg:px-36 text-base font-Barlow tracking-[2.7px] uppercase font-extralight'>
                        <NavLink className='navlink py-6 hover:border-b-4 hover:border-[#ffffff1e]' to="/"><span className='hidden lg:inline font-bold pr-1'>00</span> Home</NavLink>
                        <NavLink className='navlink py-6 hover:border-b-4 hover:border-[#ffffff1e]' to="/destination"><span className='hidden lg:inline font-bold pr-1'>01</span> Destination</NavLink>
                        <NavLink className='navlink py-6 hover:border-b-4 hover:border-[#ffffff1e]' to="/crew"><span className='hidden lg:inline font-bold pr-1'>02</span> Crew</NavLink>
                        <NavLink className='navlink py-6 hover:border-b-4 hover:border-[#ffffff1e]' to="/technology"><span className='hidden lg:inline font-bold pr-1'>03</span> Technology</NavLink>
                    </div>
                </div>
            </div>

            <div className="h-full pl-10  backdrop-blur-3xl z-50 w-3/4 text-white right-0 overflow-hidden" style={openModal ? { position: "absolute" } : { display: "none" }}>
                <div className='flex justify-end pr-10 pt-10'>
                    <img onClick={handleclick} src={close} alt="" />
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <a onClick={handleclick} className='py-6' href="/"><span className='md:hidden lg:inline font-bold pr-1'>00</span> Home</a>
                    <a onClick={handleclick} className='py-6' href="/destination"><span className='md:hidden lg:inline font-bold pr-1'>01</span> Destination</a>
                    <a onClick={handleclick} className='py-6' href="/crew"><span className='md:hidden lg:inline font-bold pr-1'>02</span> Crew</a>
                    <a onClick={handleclick} className='py-6' href="/technology"><span className='md:hidden lg:inline font-bold pr-1'>03</span> Technology</a>
                </div>
            </div >
        </>
    )
}
