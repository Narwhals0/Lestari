// src/components/ArticleDetail.jsx
import { Link, useParams } from "react-router-dom";
import articles from "../data/articles";
import arrow from "../assets/arrowback.svg";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="flex flex-col gap-3 m-5">
      <div className="flex items-start justify-between gap-3">
        <Link to="/article" className="flex-shrink-0">
          <img src={arrow} alt="Back" className="w-7" />
        </Link>
        <h1 className="font-extrabold text-xl">{article.title}</h1>
      </div>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-auto rounded-md"
      />
      <div className="flex justify-between">
        <p className="text-gray-500 text-xs">Written by {article.author}</p>
        <p className="text-gray-500 text-xs">
          {article.read_duration} mins read
        </p>
      </div>
      <p className="text-gray-500 text-xxs">Published on {article.date}</p>
      {article.content.map((paragraph, index) => (
        <p key={index} className="mt-3 text-sm">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ArticleDetail;
