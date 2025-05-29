import { useState } from "react";
// import type { Articulo } from "@/interfaces/Article";
import BlogCard from "@/components/blog-card/Blogcard";
import { articles } from "@/services/articles";
const ArticleSection = () => {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3); // carga 3 más
    };

return (
    <section className="max-w-7xl mx-auto px-6 py-16 font-fam-ge">
        <h2 className="text-3xl font-bold mb-10">Importante para tu empresa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, visibleCount).map((article) => (
            <BlogCard key={article.id} article={article} />
            ))}
        </div>

        {visibleCount < articles.length && (
            <div className="text-center mt-10">
            <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
            >
                Ver más artículos
            </button>
            </div>
        )}
    </section>
);
};

export default ArticleSection;
