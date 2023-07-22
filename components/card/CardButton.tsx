"use client";

import {TbZoomQuestion} from 'react-icons/tb'

interface Button {
  setHint: React.Dispatch<React.SetStateAction<boolean>>;
  hint: boolean;
}

const CardButton = ({ setHint, hint }: Button) => {
  return <TbZoomQuestion className="w-[40px] h-[40px] transition  ease-in-out duration-500 __text_color2 hover:scale-75 " onClick={() => setHint((hint) => !hint)}/>
};

export default CardButton;



/*
className="w-40 h-25 input_Btn px-8 py-2 mt-2 mb-2  text-xl leading-tight uppercase rounded-xl shadow-md hover:bg-blue-800 transition  ease-in-out duration-500 font-bold __button_color __text_color hover:scale-75 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z */