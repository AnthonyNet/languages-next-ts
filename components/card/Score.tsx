
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
    <div  className=" flex  justify-center items-center h-8  px-6 border-b border-gray-300 text-yellow-400 starsDiv">
          {/*runMe(score)*/}
           {iterateStars(score)}
        </div>
  )
}

export default Score;