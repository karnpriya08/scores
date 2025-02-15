import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/sports.png";

const index = () => {
  return (
    <>
      <div className=' bg-red-400 grid grid-cols-1 justify-end  md:grid-cols-2 p-4 '>
        <div className='flex text-xl justify-start font-bold h-14 p-'>
          <img src={image} alt="lo" width={40} height={25} />
          <span className='p-2'>Score Tracker</span>
        </div>
        <div className='flex  md:flex-row justify-evenly mx-5'>
          <Link to="/"><div className='m-1 hover:scale-150'>Home</div></Link>
          <Link to="/about"><div className='m-1'>About</div></Link>
          <Link to="/contact"><div className='m-1 hover:scale-150'> Contact</div></Link>
          <Link to="/popularplayer"><div className='m-1 hover:scale-150'>Popular Players</div></Link>
          <Link to="/scores"><div className='m-1 hover:scale-150'>Scores</div></Link>
        </div>
      </div>
    </>
  )
}

export default index
