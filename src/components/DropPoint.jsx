import { Link } from "react-router-dom";
import arrow from "../assets/arrowback.svg";

const Article = () => {
  return (
    <div className="flex flex-col gap-9 m-5">
      <div className="flex flex-col gap-1">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="absolute left-0">
            <img src={arrow} alt="Back" className="w-7" />
          </Link>
          <h1 className="font-extrabold text-xl text-center w-full">
            Drop Point
          </h1>
        </div>
        <p className="text-center text-xs text-lime-700 font-semibold">Recycle, Earn Points, and Get Rewards</p>
      </div>
    </div>
  );
};

export default Article;
