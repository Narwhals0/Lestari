import { Link } from "react-router-dom";
import arrow from "../assets/arrowback.svg";
import dropPoints from '../data/droppoint.js';

const Article = () => {
  return (
    <div className="flex flex-col gap-9 m-5">
      <div className="flex flex-col gap-1">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="absolute left-0">
            <img src={arrow} alt="Back" className="w-7" />
          </Link>
          <h1 className="font-bold text-xl text-center w-full">
            Drop Point
          </h1>
        </div>
        <p className="text-center text-xs text-lime-700 font-semibold">
          Recycle, Earn Points, and Get Rewards
        </p>
      </div>
      <div className="flex flex-col gap-5 m-5">
        {dropPoints.map((dropPoint) => (
          <Link
            to={`/drop-point/${dropPoint.id}`}
            key={dropPoint.id}
            className="flex justify-between p-5 rounded-3xl bg-white shadow-lg shadow-gray-700"
          >
            {/* DP information */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <h2 className="font-bold text-md">{dropPoint.name}</h2>
              </div>
              <div className="flex gap-2 items-center">
                <img src={dropPoint.icons.recycle} alt="" className="w-5" />
                <small className="text-gray-500">
                {dropPoint.distance} | {dropPoint.duration}
                </small>
              </div>
              <div className="flex gap-2 items-center">
                <img src={dropPoint.icons.clock} alt="" className="w-5" />
                <small className="text-lime-700">{dropPoint.open}</small>
              </div>
              <div className="flex gap-2 items-center">
                <img src={dropPoint.icons.trash} alt="" className="w-5" />
                <small className="text-orange-500">{dropPoint.space}</small>
              </div>
            </div>
            {/* dp image */}
            <div className="flex w-20 items-center">
              <img
                src={dropPoint.image}
                alt={dropPoint.name}
                className="w-20 h-20 rounded-xl object-cover shadow-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Article;
