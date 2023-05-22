"use client"

import React from "react";
import { useReducer } from "react";

const ACTION = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
	NEW_USER_INPUT: "newUserInput",
	TG_COLOR: "tgColor",
};

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case ACTION.INCREMENT:
			return { ...state, count: state.count + 1 };
		case ACTION.DECREMENT:
			return { ...state, count: state.count - 1 };
		case ACTION.NEW_USER_INPUT:
			return { ...state, userInput: action.payload };
		case ACTION.TG_COLOR:
			return { ...state, color: !state.color };
		default:
			throw new Error();
	}
};

export function Pokus() {
	const [state, dispatch] = useReducer(reducer, {
		count: 0,
		userInput: "",
		color: false,
	});
	/*const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);*/

	return (
		<div className="Pokus" style={{ color: state.color ? "#FFF" : "#FFF952" }}>
			<label htmlFor="userInput">Text:</label>
			<input
				type="text"
				value={state.userInput}
				onChange={(e) =>
					dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
				}
				placeholder="User Input"
			/>
			<p>{state.count}</p>

			<section>
				<button
					className="p-4 m-2 border-4"
					onClick={() => dispatch({ type: "ACTION.INCREMENT" })}>
					+
				</button>
				<button
					className="p-4 m-2 border-4"
					onClick={() => dispatch({ type: "ACTION.DECREMENT" })}>
					-
				</button>
				<button
					className="p-4 m-2 border-4"
					onClick={() => dispatch({ type: "ACTION.TG_COLOR" })}>
					Color
				</button>
			</section>
			<br />
			<br />
			<p>{state.userInput}</p>
		</div>
	);
}

export default Pokus;
