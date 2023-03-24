
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


    {/*the function gives stars depends on score number */}
    /*
  const runMe = (score: number) => {
    switch (score) {
      case 1:
        return (
          <span>
            <BsFillStarFill />
          </span>
        );
        break;
      case 2:
        return (
          <span className="flex flex-row">
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );
        break;
      case 3:
        return (
          <span className="flex flex-row">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );
        break;
      case 4:
        return (
          <span className="flex flex-row">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );
        break;
      case 5:
        return (
          <span className="flex flex-row">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );

      default:
        return <span>ㅤ</span>;
    }
  };*/

  return (
    <div  className=" flex  justify-center py-3 px-6 border-b border-gray-300 text-yellow-400 starsDiv">
          {/*runMe(score)*/}
           {iterateStars(score)}
        </div>
  )
}

export default Score;