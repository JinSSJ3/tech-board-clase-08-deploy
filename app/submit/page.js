import ArticleForm from "../components/ArticleForm";

export default function SubmitPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Crear nuevo articulo
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Envianos un enlace interesante
      </p>
      <ArticleForm />
    </main>
  );
}
