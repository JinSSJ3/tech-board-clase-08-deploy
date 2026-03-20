import Link from "next/link";
import { getArticles } from "./actions/articleActions";

export default async function Homemade() {
  const artilcles = await getArticles();
  console.log("Homemade - artilcles", artilcles);
  return (
    <main className="bg-gray-200 min-h-screen">
      {/** TITULO */}
      <div className="flex flex-col justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Últimos articulos
        </h1>
        <Link
          href={"/submit"}
          className="bg-blue-950 text-white font-semibold px-4 py-2 rounded-md"
        >
          + Nuevo Articulo
        </Link>
      </div>
      {artilcles.length === 0 ? (
        <>Aún no hay artículos. Se el primero...</>
      ) : (
        <div className="flex flex-column justify-center items-center mb-8 gap-4 w-full">
          {artilcles.map((article) => (
            <article key={article.id} className="bg-white max-w-100 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 text-left">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  {article.title}
                </a>
              </h2>{" "}
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-semibold text-gray-800 ">
                  Fecha de cración
                </p>
                <span className="text-gray-400">
                  {new Date(article.createdAt).toLocaleDateString()}
                </span>
                <p className="text-sm font-semibold text-gray-800 ">Enlace</p>
                <span className="text-sm font-semibold text-blue-800">
                  {article.url}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
