import react from 'react';
import ArrowSvg from './ArrowSvg';
import Arrow2Svg from './Arrow2Svg';
import Arrow3Svg from './Arrow3Svg';

  const Sec = () => {
    return (
        <div className="flex flex-row ">
         <div className="flex-1 flex justify-center ">
    
            <ul>
         <li> 
         
        <button className=" flex flex-row ring-4 font-medium shadow-2xl  py-3    text-black rounded-md ">
       <div className="flex flex-col px-12  text-center"> <span></span></div>
       <div className="flex flex-col px-12 text-center"><span >Home</span></div>
       <div className="flex flex-col px-12 text-center"><ArrowSvg  /> </div>
          </button>
          </li>
          <li>
          <button className=" flex flex-row ring-4 font-medium shadow-2xl  py-3 my-5 text-black rounded-md">
        <div className="flex flex-col px-12"><span></span></div>
        <div className="flex flex-col px-12"><span >Work</span></div>
         <div className="flex flex-col px-12"><Arrow2Svg /></div> 
          </button>
          </li>
          <li>
          <button className="flex flex-row ring-4  font-medium shadow-2xl py-3 text-black rounded-md">
        <div className="flex flex-col px-12 bg-color-black"><span></span></div>
        <div className="flex flex-col px-12"><span >Other</span></div>
         <div className="flex flex-col px-12"><Arrow3Svg /></div> 
          </button>
          </li>
       
       
           </ul>
        </div>
        </div>

    )
    }

export default Sec;
    