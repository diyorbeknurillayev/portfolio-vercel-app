import Link from 'next/link'
import React, { useState } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { FaMoon, FaUser, FaCopy } from 'react-icons/fa'
import { FiInstagram, FiPhone } from 'react-icons/fi'
import { RiTelegramLine, RiFacebookCircleFill } from 'react-icons/ri'
import { VscGithub } from 'react-icons/vsc'
import { HiDownload } from 'react-icons/hi'
import resume from "./resume.jpg"
import {CiCircleCheck} from 'react-icons/ci'
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
        <section className={`${show ? "bg-[#0a141d] text-white" : "bg-white text-black"} transition-[1s] h-[107vh]`}>
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
                        <Link href={resume} download className='flex items-center button_222 py-[16px] text-white rounded-[7px] tracking-[1.5px] font-[500] text-[19px] px-[24px] bg-[#42A5F5]'>Download CV <HiDownload /></Link>
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
                            <div className='flex justify-center space-x-8 items-center'>
                                <div className='w-[380px] gradient-bla h-[255px] rounded-[10px] overflow-hidden relative'>
                                    <img className='scale-125 md:scale-100 overflow-hidden h-[290px] relative' src="https://backend.chop-chop.uz/api/public/image_1670515405767_myteacher.84e35e333effb379b88a.jpg" alt="" />
                                    <div className='bg-gradient'>
                                        <div className='space-y-1'>
                                            <p className='text-[15.6px] font-[100]'>My Teacher</p>
                                            <h3 className='text-[24px] font-bold'>Full Website</h3>
                                            <div className='text-white w-[35px] cursor-pointer flex justify-center items-center h-[35px] rounded-[9px] bg-blue-500'>
                                                <FaCopy className='text-[18px] text-white' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[380px] gradient-bla h-[255px] rounded-[10px] overflow-hidden relative'>
                                    <img className='scale-125 md:scale-100 overflow-hidden h-[290px] relative' src="https://backend.chop-chop.uz/api/public/image_1670515443092_cardiocenter.302bed8983817ca4cd93.jpg" alt="" />
                                    <div className='bg-gradient'>
                                        <div className='space-y-1'>
                                            <p className='text-[15.6px] font-[100]'>Cardiocenter</p>
                                            <h3 className='text-[24px] font-bold'>Full Website</h3>
                                            <div className='text-white w-[35px] cursor-pointer flex justify-center items-center h-[35px] rounded-[9px] bg-blue-500'>
                                                <FaCopy className='text-[18px] text-white' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <div className='flex w-full items-center justify-around'>
                                <h3 className='text-[20px] ml-[80px] font-[600]'>Frontend</h3>
                                <h3 className='text-[20px] mr-[80px] font-[600]'>Additional</h3>
                            </div>
                            <div className='flex justify-center space-x-[70px] mt-4 w-full'>
                                <div className='space-y-5'>
                                    <div className='flex space-x-1'>
                                        <CiCircleCheck className='mt-[4px] text-[18px] text-blue-500' />
                                        <div>
                                            <h6 className='text-[17px]'>React</h6>
                                            <p className='text-gray-500 text-[14px]'>Intermedia</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-1'>
                                        <CiCircleCheck className='mt-[4px] text-[18px] text-blue-500' />
                                        <div>
                                            <h6 className='text-[17px]'>HTML, CSS</h6>
                                            <p className='text-gray-500 text-[14px]'>Intermedia</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-1'>
                                        <CiCircleCheck className='mt-[4px] text-[18px] text-blue-500' />
                                        <div>
                                            <h6 className='text-[17px]'>SCSS</h6>
                                            <p className='text-gray-500 text-[14px]'>Intermedia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-5'>
                                    <div className='flex space-x-1'>
                                        <CiCircleCheck className='mt-[4px] text-[18px] text-blue-500' />
                                        <div>
                                            <h6 className='text-[17px]'>JavaScript</h6>
                                            <p className='text-gray-500 text-[14px]'>Intermedia</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-1'>
                                        <CiCircleCheck className='mt-[4px] text-[18px] text-blue-500' />
                                        <div>
                                            <h6 className='text-[17px]'>Node Js</h6>
                                            <p className='text-gray-500 text-[14px]'>Basic</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-1'>
                                        <CiCircleCheck className='mt-[4px] text-[18px] text-blue-500' />
                                        <div>
                                            <h6 className='text-[17px]'>Rest API</h6>
                                            <p className='text-gray-500 text-[14px]'>Intermedia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-5'>
                                    <div className='flex space-x-1'>
                                        <CiCircleCheck className='mt-[4px] text-[18px] text-blue-500' />
                                        <div>
                                            <h6 className='text-[17px]'>WebPack</h6>
                                            <p className='text-gray-500 text-[14px]'>Basic</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-1'>
                                        <CiCircleCheck className='mt-[4px] text-[18px] text-blue-500' />
                                        <div>
                                            <h6 className='text-[17px]'>GIT</h6>
                                            <p className='text-gray-500 text-[14px]'>Basic</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-5'>
                                    <div className='flex space-x-1'>
                                        <CiCircleCheck className='mt-[4px] text-[18px] text-blue-500' />
                                        <div>
                                            <h6 className='text-[17px]'>Optimisation</h6>
                                            <p className='text-gray-500 text-[14px]'>Intermedia</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-1'>
                                        <CiCircleCheck className='mt-[4px] text-[18px] text-blue-500' />
                                        <div>
                                            <h6 className='text-[17px]'>Materil UI</h6>
                                            <p className='text-gray-500 text-[14px]'>Basic</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </TabContext>
                </Box>

                <h3 className='text-gray-500 text-[18px] text-center mt-5'>Diyorbek Nurullayev 2022</h3>
            </div>
        </section>
    )
}

export default Portfolio;
