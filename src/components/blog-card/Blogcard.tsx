/* import type { Articulo } from "@/interfaces/Article";
import { Link } from "react-router-dom";

const BlogCard = ({ article }: { article: Articulo }) => {
return (
    <Link to={`/blog/${article.id}`} className="block bg-white shadow-md overflow-hidden hover:shadow-lg transition">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
        <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
            <p className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
            <p className="text-gray-600 text-sm">{article.excerpt}</p>
        </div>
    </Link>
);
};

export default BlogCard; */
import { Link } from "react-router-dom";
import type { Articulo } from "@/interfaces/Article";

interface BlogCardProps {
    article: Articulo;
}

const BlogCard = ({ article }: BlogCardProps) => {
return (
    <Link to={`/blog/${article.id}`} className="block bg-white shadow-md overflow-hidden hover:shadow-lg transition">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
        <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
            <p className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
            <p className="text-sm text-gray-600 font-semibold italic">{article.autor}</p>
            <p className="text-gray-600 text-sm">{article.excerpt}</p>
        </div>
    </Link>
);
};

export default BlogCard;
