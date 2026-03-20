"use client";

import { useActionState, useRef, useState } from "react";
import { submitArticle } from "../actions/articleActions";
import SubmitButton from "./SubmitButton";

const initialState = {
  success: false,
  message: "",
  errors: null,
};
const ArticleForm = () => {
  const [state, formAction] = useActionState(submitArticle, initialState);

  const formRef = useRef(null);

  const classNameColor = state.success
    ? "bg-green-50 text-green-800 border border-green-200"
    : "bg-red-50 text-red-800 border border-red-200";
  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-lg"
    >
      {state.message && (
        <div className={"p-3 rounded-md font-medium " + classNameColor}>
          {state.message}
        </div>
      )}

      <div>
        {/** LABEL */}
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {"Título del artículo"}
        </label>
        {/** INPUT */}
        <input
          id="title"
          type="text"
          name="title"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
          placeholder="Ej. Novedades en Next v 20"
        />
        {/** ERROR */}
        {state.errors?.title && (
          <p className="mt-1 text-sm text-red-600"> {state.errors.title}</p>
        )}
      </div>

      <div>
        {/** LABEL */}
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {"URL del enlace"}
        </label>
        {/** INPUT */}
        <input
          id="url"
          type="text"
          name="url"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
          placeholder="https://......"
        />
      </div>
      {state.errors?.url && (
        <p className="mt-1 text-sm text-red-600">{state.errors.url}</p>
      )}
      <SubmitButton />
    </form>
  );
};

export default ArticleForm;
