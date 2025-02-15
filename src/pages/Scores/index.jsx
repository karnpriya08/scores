import React, { useState } from 'react';
import Card from "../../component/Card";
import { useSelector } from "react-redux";

const index = () => {
  
  const data = useSelector((state) => state.Scores);

  const [search, setSearch] = useState(" ");
console.log(data);
  const filteredData =data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className='bg-slate-50 text-black '>
        <h1 className="text-4xl font-bold text-center p-5 text-red-400">Scores</h1>
        <div className='flex flex-row-reverse  justify-center  px-5 '>
        <p className='text-center text-2xl bg-red-400 p-3'>search</p>
       <div className=' border border-red-400 p-4  w-96 text-lg'> 
        <input type="text" name="name" placeholder='search player'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        </div>
        </div>
       
        <div className='m-4 p-4'> 
          {data.map((data,index) => {
            return (
              <Card key={index}
              name={`Player name: ${data.name}`}
                score={`Player score: ${data.score}`} />
            );
          })}
        </div>
        <div>
 {filteredData.length === 0 ? (
        <p className="text-center text-red-400 text-xl p-4 ">No players found yet.</p>
      ) : 
        (
          <div className='m-4 p-4'> 
          {data.map((data,index) => {
            return (
              <Card key={index}
              name={`Player name: ${data.name}`}
                score={`Player score: ${data.score}`} />
            );
          })}
        </div>
           )}
        </div>
       
        
     

      </div>
    </>
  )
}

export default index
