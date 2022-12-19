import Link from 'next/link'
import React, { useState } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { FaMoon, FaUser } from 'react-icons/fa'
import { FiInstagram, FiPhone } from 'react-icons/fi'
import { RiTelegramLine, RiFacebookCircleFill } from 'react-icons/ri'
import { VscGithub } from 'react-icons/vsc'
import { HiDownload } from 'react-icons/hi'
import resume from "./resume.jpg"
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Portfolio = () => {

    const [show, setShow] = useState(true)

    function show_2() {
        setShow(!show)
    }

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className={`${show ? "bg-[#0a141d] text-white" : "bg-white text-black"} transition-[1s]`}>
            <div className='container relative h-screen mx-auto max-w-[968px] py-[40px] px-0'>
                <div onClick={show_2} className='absolute right-0 cursor-pointer'>{show ? <BsFillSunFill className='hover:text-blue-500 transition-[4s] w-[23px] h-[23px]' /> : <FaMoon className='hover:text-blue-500 transition-[4s] absolute right-0 cursor-pointer w-[23px] h-[23px]' />}</div>
                <div className='w-[345px] mx-auto'>
                    <div className='flex justify-center pt-[30px]'>
                        <div className='cursor-pointer border-[3px] border-blue-500 w-[150px] h-[150px] flex justify-center items-center rounded-full'>
                            <FaUser className='w-[100px] h-[100px] rounded-full' />
                        </div>
                    </div>
                    <div className='flex justify-center pt-[15px]'>
                        <h1 className='text-[27px] font-[700]'>Diyorbek Nurullayev</h1>
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-gray-500'>Fronent Developer</p>
                    </div>
                    <ul className='flex justify-center mt-[25px] h-[16px]'>
                        <Link className='mx-2' href='/'><FiInstagram className='text-[20px] hover:text-blue-500 transition-all' /></Link>
                        <Link className='mx-2' href='/'><RiFacebookCircleFill className='text-[20px] hover:text-blue-500 transition-all' /></Link>
                        <Link className='mx-2' href='/'><RiTelegramLine className='text-[20px] hover:text-blue-500 transition-all' /></Link>
                        <Link className='mx-2' href='/'><VscGithub className='text-[20px] hover:text-blue-500 transition-all' /></Link>
                        <Link className='mx-2' href='/'><FiPhone className='text-[20px] hover:text-blue-500 transition-all' /></Link>
                    </ul>
                    <div className='w-full flex items-center mt-10 justify-between'>
                        <div className='text-center cursor-pointer w-[30%] rounded-xl hover: transition-[350ms] px-[15px] py-2 hover:bg-[#64606043]'>
                            <h3 className='text-[22px] font-[700]'>0+</h3>
                            <h4 className='text-[16px] font-[500] text-gray-500'>Years of <br /> work</h4>
                        </div>
                        <div className='text-center cursor-pointer w-[30%] rounded-xl hover: transition-[350ms] px-[15px] py-2 hover:bg-[#64606043]'>
                            <h3 className='text-[22px] font-[700]'>5+</h3>
                            <h4 className='text-[16px] font-[500] text-gray-500'>Completed <br /> projects</h4>
                        </div>
                        <div className='text-center cursor-pointer w-[30%] rounded-xl hover: transition-[350ms] px-[15px] py-2 hover:bg-[#64606043]'>
                            <h3 className='text-[22px] font-[700]'>0+</h3>
                            <h4 className='text-[16px] font-[500] text-gray-500'>Years of <br /> students</h4>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <a href={resume} download className='flex items-center button_222 py-[16px] text-white rounded-[7px] tracking-[1.5px] font-[500] text-[19px] px-[24px] bg-[#42A5F5]'>Download CV <HiDownload /></a>
                    </div>
                </div>
                <Box className='mt-10' sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} className={`${show ? 'text-white' : 'text-black'}`} aria-label="lab API tabs example">
                                <Tab className='fw-bold' label="Projects" value="1" />
                                <Tab className='fw-bold' label="Skills" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div className='flex justify-betwen items-center'>
                                <div className='cursor-pointer w-[332px] h-[240px] rounded-[7px] overflow-hidden relative'>
                                    <img className='w-[400px] h-[290px] relative' src="https://backend.chop-chop.uz/api/public/image_1670515405767_myteacher.84e35e333effb379b88a.jpg" alt="" />
                                    <div className='absolute h-full bg-[]'>

                                    </div>  
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">List 2</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </section>
    )
}

export default Portfolio;
