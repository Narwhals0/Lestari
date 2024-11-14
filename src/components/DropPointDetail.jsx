// src/components/ArticleDetail.jsx
import { Link, useParams } from "react-router-dom";
import dropPoints from "../data/droppoint";
import arrow from "../assets/arrowback.svg";

const DropPointDetail = () => {
  const { id } = useParams();
  const dropPoint = dropPoints.find((dropPoint) => dropPoint.id === parseInt(id));

  if (!dropPoint) {
    return <div>Drop Point not found</div>;
  }

  return (
    <div className="flex flex-col gap-5 m-5">
      <div className="flex items-start gap-3">
        <Link to="/drop-point" className="flex-shrink-0">
          <img src={arrow} alt="Back" className="w-7" />
        </Link>
        <h1 className="font-extrabold text-xl">{dropPoint.name}</h1>
      </div>
      <div className="flex justify-center">
        <img
          src={dropPoint.map}
          alt=""
          className="w-74 h-auto rounded-xl border-2 border-lime-700"
        />
      </div>
      <div className="flex flex-col gap-5">
          <div
            className="flex justify-between rounded-3xl shadow-gray-700"
          >
            {/* DP information */}
            <div className="flex flex-col gap-3">
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
          </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold">Waste Types</h2>
        <div className="flex gap-3 justify-between">
          <h3 className="border-2 border-gray-400 p-1 w-24 text-center text-gray-500 text-sm rounded-3xl">Glass</h3>
          <h3 className="border-2 border-gray-400 p-1 w-24 text-center text-gray-500 text-sm rounded-3xl">Plastic</h3>
          <h3 className="border-2 border-gray-400 p-1 w-24 text-center text-gray-500 text-sm rounded-3xl">Paper</h3>
        </div>
        <div className="flex gap-3 justify-between">
          <h3 className="border-2 border-gray-400 p-1 w-24 text-center text-gray-500 text-sm rounded-3xl">Metal</h3>
          <h3 className="border-2 border-gray-400 p-1 w-24 text-center text-gray-500 text-sm rounded-3xl">Clothing</h3>
          <h3 className="border-2 border-gray-400 p-1 w-24 text-center text-gray-500 text-sm rounded-3xl">Electronic</h3>
        </div>
      </div>
    </div>
  );
};

export default DropPointDetail;
