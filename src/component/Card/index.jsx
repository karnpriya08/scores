import React from 'react';
import image from "../../assets/a.jpeg"
import { useDispatch, useSelector } from 'react-redux';



const index = ({ name, score,index }) => {
    const data = useSelector((state) => state.Scores);
    
    
    return (
        <div className='grid grid-rows-1 md:grid-rows-3 w-80 h-80 m-1 border border-red-400  p-4 mx-3'>

            <div className='m-auto'><img src={image} alt="img" width={60} height={60}/></div>
            <div className='text-3xl '> {name}</div>
            <div className='text-3xl'> {score}</div>
            
        </div>
    )
}

export default index
