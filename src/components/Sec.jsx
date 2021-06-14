import react from 'react';
import ArrowSvg from './ArrowSvg';
import Arrow2Svg from './Arrow2Svg';
import Arrow3Svg from './Arrow3Svg';

  const Sec = () => {
    return (
        <div className="flex flex-row ">
         <div className="flex-1 flex justify-center ">
    
            <ul className="">
         <li> 
    
        <button className="ring-4 font-medium shadow-2xl px-40 py-3 my-8 bg-white-600 text-black rounded-md ">
        <span className="mx-2  flex-2">Home</span>
          <ArrowSvg  />
          </button></li>
          <li>
          <button className="ring-4 font-medium shadow-2xl px-40 py-3 my-5 text-black rounded-md">
        <span className="mx-2">Work</span>
          <Arrow2Svg />
          </button>
          </li>
          <li>
          <button className="ring-4  font-medium shadow-2xl px-40 py-3 my-5 text-black rounded-md">
        <span className="mx-1">Other</span>
          <Arrow3Svg />
          </button>
          </li>
       
       
           </ul>
        </div>
        </div>

    )
    }

export default Sec;
    