import { Link } from 'react-router-dom';
import arrow from "../assets/arrowback.svg";
import articles from "../data/articles";

const Article = () => {
  return (
    <div className="flex flex-col gap-9 m-5">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="absolute left-0">
          <img src={arrow} alt="Back" className="w-7"/>
        </Link>
        <h1 className="font-extrabold text-xl text-center w-full">Article</h1>
      </div>
      <div className="flex flex-col gap-5">
        {articles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            <div className="flex gap-5 w-full p-5 border-2 border-lime-500 rounded-2xl bg-white">
              <img src={article.image} alt="" className="w-20 h-20 rounded-md"/>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-sm">{article.title}</h3>
                <p className="text-gray-500 text-xxs">Written by {article.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Article;