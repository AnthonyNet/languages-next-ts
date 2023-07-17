
import { BsFillStarFill } from "react-icons/bs";
interface Score{
  score:number;
}

const Score = ({score}:Score) => {

const iterateStars = (score:number) => {
  let stars = [];
  for (let i = 0; i < score; i++) {
    stars.push(<BsFillStarFill key={i} />);
  }
  return stars;
};

  return (
		<div className=" flex  justify-center items-center h-8  px-6  border-y-4 border-purple-800 border-double text-yellow-400 starsDiv  __border_color">
			{/*runMe(score)*/}
			{iterateStars(score)}
		</div>
	);
}

export default Score;