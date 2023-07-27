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
