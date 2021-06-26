import react from 'react';
import plusSvg from './plusSvg';


const Footer = () => {
    return (
    <div className="flex flex-row">
     <div className=" flex-1 flex justify-center">
         <button className=" border-none ring-4 rounded-full h-24 w-24 p-none bg-blue-600 items-center rounded-md my-10 ...">
         <plusSvg/>
         </button>

     </div>
    </div>


    )
    }
export default Footer;