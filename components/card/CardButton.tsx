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
			className="input_Btn px-6 py-2.5 mt-2 mb-2 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  ease-in-out duration-500">
			{text}
		</button>
	);
};

export default CardButton;
