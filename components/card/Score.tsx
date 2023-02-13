
import { BsFillStarFill } from "react-icons/bs";
interface Score{
  score:number;
}

const Score = ({score}:Score) => {


    {/*the function gives stars depends on score number */}
  const runMe = (score: number) => {
    switch (score) {
      case 1:
        return (
          <span>
            <BsFillStarFill className="starIcon"/>
          </span>
        );
        break;
      case 2:
        return (
          <span className="flex flex-row">
            <BsFillStarFill className="starIcon"/>
            <BsFillStarFill className="starIcon"/>
          </span>
        );
        break;
      case 3:
        return (
          <span className="flex flex-row">
            <BsFillStarFill className="starIcon"/>
            <BsFillStarFill className="starIcon"/>
            <BsFillStarFill className="starIcon"/>
          </span>
        );
        break;
      case 4:
        return (
          <span className="flex flex-row">
            <BsFillStarFill className="starIcon"/>
            <BsFillStarFill className="starIcon"/>
            <BsFillStarFill className="starIcon"/>
            <BsFillStarFill className="starIcon"/>
          </span>
        );
        break;
      case 5:
        return (
          <span className="flex flex-row">
            <BsFillStarFill className="starIcon"/>
            <BsFillStarFill className="starIcon"/>
            <BsFillStarFill className="starIcon"/>
            <BsFillStarFill className="starIcon"/>
            <BsFillStarFill className="starIcon"/>
          </span>
        );

      default:
        return <span>ㅤ</span>;
    }
  };

  return (
    <div  className=" flex  justify-center py-3 px-6 border-b border-gray-300 text-yellow-400 starsDiv">
          {runMe(score)}
         
        </div>
  )
}

export default Score;