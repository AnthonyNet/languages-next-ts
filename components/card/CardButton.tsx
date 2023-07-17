"use client";

interface Button {
  onClick: () => void;
  text: string;
}

const CardButton = ({ onClick, text }: Button) => {
  return (
		<button
			onClick={onClick}
			type="submit"
			className="input_Btn px-8 py-2 mt-2 mb-2  text-xl leading-tight uppercase rounded-xl shadow-md hover:bg-blue-800 transition  ease-in-out duration-500 font-bold __button_color __text_color hover:scale-75">
			{text}
		</button>
	);
};

export default CardButton;
