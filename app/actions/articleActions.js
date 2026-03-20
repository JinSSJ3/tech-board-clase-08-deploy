"use server";

import { revalidatePath } from "next/cache";

let artilcles = [
  {
    id: "1",
    title: "Clase 07 Next - Server actions",
    url: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    createdAt: new Date(),
  },
];

const POST = (newArticle, token) => {
  console.log("POST() - newArticle, token", newArticle, token);
  console.log(
    "POST() - process.env.API_KEY_AWS_BUCKET",
    process.env.API_KEY_AWS_BUCKET,
  );

  artilcles.unshift(newArticle);
  console.log("POST() - artilcles", artilcles);
};

export async function submitArticle(state, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (!process.env.API_KEY_AWS_BUCKET)
    throw new Error("API_KEY_AWS_BUCKET was not set");

  try {
    console.log("submitArticle state", state);
    console.log("submitArticle formData", formData);

    const title = formData.get("title");
    const url = formData.get("url");
    const id = artilcles.length + 1;

    console.log("submitArticle id, title, url", id, title, url);

    const errors = {};

    if (title.trim().length == 0) {
      errors.title = "Titulo no puede ser vacío";
    }

    if (!url.startsWith("http") || url.length == 0) {
      errors.url = "Ingresar direción válida";
    }

    console.log("submitArticle", title, url, id);
    console.log("submitArticle errors", errors.title?.length);
    if (errors.title?.length > 0) {
      console.log("[submitArticle] errors", errors);

      return {
        success: false,
        message: "Por favor corrije los errores",
        errors: errors,
      };
    }

    const newArticle = {
      id,
      title,
      url,
      createdAt: new Date(),
    };

    POST(newArticle, process.env.API_KEY_BACKEND);

    revalidatePath("/");
    return {
      success: true,
      message: "¡Articulo publicado exitosamente!",
      errors: null,
    };
  } catch (error) {
    return {
      success: false,
      message: error,
      errors: null,
    };
  }
}

export async function getArticles() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return artilcles;
}
