import React from 'react'
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';
import image from "../../assets/sports.png"

const index = () => {
    return (
        <>
            <div className='bg-red-400 p-2'>
                <div>
                    <div className='flex text-xl justify-center font-bold h-14 p-2'>
                        <img src={image} alt="lo" width={40} height={25} />
                        <span className='p-2'>Score Tracker</span>
                    </div>

                </div>
                <div className='grid  grid-cols-1 justify-items-center  bg-red-400 p-2 md:grid-cols-2 '>
                    <div className='flex-col space-x-18 m-2'>
                        <h3 className='text-xl font-semibold'>Get to Know Us</h3>
                        <h6>Contact us</h6>
                        <h6>About us</h6>
                        <h6>Career</h6>
                        <h6>Terms & Conditions</h6>
                    </div>

                    <div className='space-x-0 m-2'>
                        <h3 className='font-semibold'>Mail Us</h3>
                        <p>Score Tracker Private Limited,</p>
                        <p>Buildings Tech, It </p>
                        <p>Our Tech Village,</p>
                        <p>inner Ring Road,  Village,</p>
                        <p>Bengaluru, 560103,</p>
                        <p>Telephone: 021-12345678</p>



                    </div>
                </div >

                <div className='flex flex-row gap-1 m-1 md:gap-3 justify-center text-2xl'>   Social:
                    <div className='p-2'><a href="https://www.facebook.com" target="_blank"> <FaFacebook /></a></div>
                    <div className='p-2'><a href="https://in.pinterest.com" target="_blank"><FaSquareXTwitter /></a></div>
                    <div className='p-2'><a href="https://www.instagram.com" target="_blank"><FaInstagramSquare /></a></div>

                </div>
                <div className='text-center font-bold p-3'>© 2024 Score Tracker. All rights reserved.</div>
            </div>

        </>

    )
}

export default index;
