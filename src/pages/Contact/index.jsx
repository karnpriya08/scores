import React from 'react';
import Form1 from "../../component/Form1"

import { AiOutlineMail } from "react-icons/ai";

const index = () => {
  return (
    <div>
      <div className='flex justify-center font-extrabold text-5xl p-4 m-1' >
        <div><AiOutlineMail /></div>
        <div className='m-1 text-red-400'>Contact Us</div>
      </div>

      <div className='m-8'><Form1/></div>
     

     
      <div className='grid grid-cols-1 md:grid-cols-3 m-2 p-4 text-black text-center'>
        {/* card 1 */}
        <div className=' py-4 gap-0 px-8 m-2 border-gray-50 bg-slate-100'>
          <h1 className='font-bold text-lg'>Location</h1>
          <div><p>Score Tracker Private Limited,</p>
            <p>Buildings Tech, It </p>
            <p>Our Tech Village,</p>
            <p>inner Ring Road,  Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Telephone: 021-12345678</p></div>
        </div>

        {/* card 2 */}
        <div className=' py-4 gap-0 px-8 border m-2 border-gray-50 bg-slate-100'>
          <h1 className='font-bold text-lg'>Contact Number</h1>
          <div><p>+91 1234567890</p>
            <p>+91 1234567890</p>
          </div>
        </div>

        {/* card 3 */}
        <div className=' py-4 gap-0 px-8 m-2  border-gray-50 bg-slate-100'>
          <h1 className='font-bold text-lg'>Email</h1>
          <div><p>abcdef@gmail.com</p>
            <p> abcdef@gmail.com</p>
          </div>
        </div>



      </div>




    </div>
  )
}

export default index
