import { Link } from 'react-router-dom';
import articles from "../data/articles";
import arrow from "../assets/arrow.svg";
import clock from "../assets/clock.svg";
import recycle from "../assets/recycle.svg";
import trash from "../assets/trash.svg";
import dropPoint from "../assets/dp1.jpg";

const Home = () => {
  return (
    <div className="flex flex-col gap-9 m-5">
      <h1 className="font-extrabold text-xl text-center">Home</h1>
      <div className="flex flex-col gap-5">
        {/* Greetings */}
        <div>
          <h2 className="font-extrabold text-md">Hello, Rian</h2>
          <small className="text-gray-500">Welcome!</small>
        </div>
        {/* card */}
        <div className="p-5 border-2 border-lime-500 rounded-3xl bg-white shadow-lg shadow-gray-700">
          {/* profile section */}
          <div className="flex gap-4 items-center">
            {/* Image */}
            <div className="w-14 h-14 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md shadow-gray-700">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQRKi6lszXdYoY385Am9lPSWzo9zevrKLuA&s"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
            {/* Profile */}
            <div className="flex-col w-36">
              <p className="font-bold">Rian Edward</p>
              <small className="font-bold text-gray-500">
                Level 4 Gold Member
              </small>
              {/* progress bar */}
              <div className="flex justify-center items-baseline gap-1">
                <div className="gap-2 w-full bg-gray-300 rounded-full h-2 mt-3">
                  <div className="bg-lime-700 h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-xs font-semibold text-gray-500">75%</p>
              </div>
            </div>
            {/* Button */}
            <a href="" className="w-9 h-9 m-auto">
              <img className="w-9 h-9" src={arrow} alt="" />
            </a>
          </div>
          {/* Status */}
          <div className="flex gap-5 justify-center mt-5">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-sm text-gray-500">Points</h3>
              <p className="font-extrabold text-lg text-yellow-400">521</p>
            </div>
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-sm text-gray-500">Transactions</h3>
              <p className="font-extrabold text-lg text-yellow-400">21</p>
            </div>
          </div>
        </div>
      </div>
      {/* Drop Point */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-md">Lokasi Terdekat</h2>
          <Link to="/droppoint" className="text-gray-500 text-xs">
            See All
          </Link>
        </div>
        {/* Card */}
        <a
          href=""
          className="flex justify-between p-5 rounded-3xl bg-white shadow-lg shadow-gray-700"
        >
          {/* DP information */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <div className="flex bg-red-500 w-9 h-9 items-center justify-center rounded-full">
                <p className="font-extrabold text-white">A</p>
              </div>
              <h2 className="font-bold text-md">Central Station</h2>
            </div>
            <div className="flex gap-2 items-center">
              <img src={recycle} alt="" className="w-5" />
              <small className="text-gray-500">150 m | 3min</small>
            </div>
            <div className="flex gap-2 items-center">
              <img src={clock} alt="" className="w-5" />
              <small className="text-lime-700">Open 24 hours</small>
            </div>
            <div className="flex gap-2 items-center">
              <img src={trash} alt="" className="w-5" />
              <small className="text-orange-500">30% of space available</small>
            </div>
          </div>
          {/* dp image */}
          <div className="flex w-1/3 items-center">
            <img
              src={dropPoint}
              alt=""
              className="w-24 h-24 rounded-xl object-cover shadow-lg"
            />
          </div>
        </a>
      </div>
      {/* Articles Section */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-md">Artikel</h2>
          <Link to="/article" className="text-gray-500 text-xs">
            See All
          </Link>
        </div>
        <div className="flex overflow-x-scroll gap-5">
          {articles.map((article) => (
            <Link to={`/article/${article.id}`} key={article.id}>
              <div
                className="w-52 h-32 p-5 border-2 border-lime-500 rounded-3xl bg-white bg-cover bg-center"
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <h3 className="font-bold text-sm text-white">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
