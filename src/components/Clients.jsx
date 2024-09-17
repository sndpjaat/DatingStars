import React from 'react'
import Jaydon from '../assets/image/webp/jydon.png'
import { Fivestar } from './Icons'
import Bator from '../assets/image/webp/Bator.png'

const Clients = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='max-w-[1140px] px-3 mx-auto'>
                    <div className='max-w-[510px] mx-auto'>
                        <h2 className='font-Raleway font-semibold text-[40px] leading-[48px] text-white max-w-[510px] text-center'>Here’s what our <span className='text-[#F7B103]'>clients say</span>  about us....</h2>
                    </div>
                    <div className='py-[60px] flex '>
                        <div className='max-w-[558px] w-full min-height-[331px] rounded-[22px] border-[1px] py-5 border-[#494949] bg-[#1A1A1A]'>
                            <div className='flex items-center justify-center'>
                                <img src={Jaydon} alt="Jaydon" />
                            </div>
                            <div className='flex items-center justify-center pt-4'>
                                <Fivestar />
                            </div>
                            <div className='flex items-center justify-center pt-4'>
                                <p className='max-w-[518px] text-opacity-70 font-Inter text-base leading-[24px] text-center text-white'>Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus vitae elit dictum eros cras sagittis. Ac in sem mi ipsum urna. Sed feugiat semper nulla amet sit in sed interdum proin. Molestie volutpat fermentum amet tempor in nulla elit viverra sed.</p>
                            </div>
                            <div className='flex items-center flex-col justify-center pt-4'>
                                <h2 className='max-w-[150px] font-Raleway font-semibold text-[24px] leading-[36px] text-[#F7B103] '>Jaydon Bator</h2>
                                <p className='font-Inter font-normal text-base leading-[24px] text-center text-white'>Sr. Designer</p>

                            </div>
                        </div>

                        <div className='max-w-[558px] w-full min-height-[331px] rounded-[22px] border-[1px] py-5 border-[#494949] bg-[#1A1A1A]'>
                            <div className='flex items-center justify-center'>
                                <img src={Bator} alt="Jaydon" />
                            </div>
                            <div className='flex items-center justify-center pt-4'>
                                <Fivestar />
                            </div>
                            <div className='flex items-center justify-center pt-4'>
                                <p className='max-w-[518px] text-opacity-70 font-Inter text-base leading-[24px] text-center text-white'>Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus vitae elit dictum eros cras sagittis. Ac in sem mi ipsum urna. Sed feugiat semper nulla amet sit in sed interdum proin. Molestie volutpat fermentum amet tempor in nulla elit viverra sed.</p>
                            </div>
                            <div className='flex items-center flex-col justify-center pt-4'>
                                <h2 className='max-w-[150px] font-Raleway font-semibold text-[24px] leading-[36px] text-[#F7B103] '>Jaydon Bator</h2>
                                <p className='font-Inter font-normal text-base leading-[24px] text-center text-white'>Sr. Designer</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Clients