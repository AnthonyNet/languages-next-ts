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
			className="input_Btn px-6 py-2.5 mt-2 mb-2 bg-blue-800/50  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 transition  ease-in-out duration-500 hover:shadow-[rgba(5,_71,_183,_0.6)]">
			{text}
		</button>
	);
};

export default CardButton;
