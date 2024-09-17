import React from 'react'
import { SmsIcon } from './Icons'

const Together = () => {
    return (
        <>
            <div className='bg-black py-[150px]'>
                <div className='max-w-[1140px] px-3 mx-auto'>
                    <div className='flex flex-col md:flex-row py-[60px] px-4'>
                        {/* Text Content */}
                        <div className='w-full md:w-6/12 px-4 mb-8 md:mb-0'>
                            <div>
                                <h2 className='text-white max-w-[362px] font-Raleway font-semibold text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] pb-4'>
                                    Let’s work together
                                </h2>
                                <p className='max-w-[474px] font-Inter font-normal text-base leading-[24px] text-white opacity-70'>
                                    Building long-term relationships with advertisers and publishers is at the core of our business.
                                </p>
                            </div>
                            <div className='pt-4'>
                                <h2 className='text-white max-w-[138px] font-Raleway font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[36px]'>
                                    Get in touch
                                </h2>
                                <p className='max-w-[461px] font-Inter font-normal text-base leading-[24px] text-white opacity-70'>
                                    Feel free to send us an email or complete the form; we are always happy to answer your questions and meet you.
                                </p>
                            </div>
                            <div className='pt-4 flex items-center gap-[12px]'>
                                <SmsIcon />
                                <p className='max-w-[461px] font-Inter font-normal text-base leading-[24px] text-white opacity-70'>
                                    support@datingstars.com
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className='w-full md:w-6/12 px-4'>
                            <div className='max-w-full md:max-w-[565px] rounded-[22px] bg-[#F7B1031A] p-[20px] md:p-[50px]'>
                                <form className='max-w-md mx-auto'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6'>
                                        <div className='relative z-0 w-full mb-5'>
                                            <input
                                                type='text'
                                                name='floating_first_name'
                                                id='floating_first_name'
                                                className='border border-[#828282] w-full list-none outline-none font-Inter text-base leading-6 text-white pl-5 rounded-[10px] py-3 bg-transparent'
                                                placeholder='First Name'
                                                required
                                            />
                                        </div>
                                        <div className='relative z-0 w-full mb-5'>
                                            <input
                                                type='text'
                                                name='floating_last_name'
                                                id='floating_last_name'
                                                className='border border-[#828282] w-full list-none outline-none font-Inter text-base leading-6 text-[#828282] pl-5 rounded-[10px] py-3 bg-transparent'
                                                placeholder='Last Name'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='relative z-0 w-full mb-5'>
                                        <input
                                            type='email'
                                            name='floating_email'
                                            id='floating_email'
                                            className='border border-[#828282] w-full list-none outline-none font-Inter text-base leading-6 text-[#828282] pl-5 rounded-[10px] py-3 bg-transparent'
                                            placeholder='Email'
                                            required
                                        />
                                    </div>
                                    <div className='relative z-0 w-full mb-5'>
                                        <input
                                            type='tel'
                                            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                            name='floating_phone'
                                            id='floating_phone'
                                            className='border border-[#828282] w-full list-none outline-none font-Inter text-base leading-6 text-[#828282] pl-5 rounded-[10px] py-3 bg-transparent'
                                            placeholder='Phone Number'
                                            required
                                        />
                                    </div>
                                    <div className='relative z-0 w-full mb-5'>
                                        <textarea
                                            placeholder='Your message...'
                                            className='border border-[#828282] w-full outline-none font-Inter text-base leading-6 text-[#828282] pl-5 rounded-[10px] py-3 bg-transparent h-[140px]'
                                        ></textarea>
                                    </div>
                                    <button
                                        type='submit'
                                        className='font-Raleway mt-10 font-semibold text-base leading-6 text-black py-3 px-6 bg-[#F7B103] rounded-xl hover:bg-[#F7B103] focus:ring-4 focus:outline-none focus:ring-yellow w-full sm:w-auto text-center'
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Together