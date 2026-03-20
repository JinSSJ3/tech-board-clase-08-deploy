"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-950 text-white font-semibold px-4 py-2 rounded-md disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
    >
      {pending ? "Publicando..." : "Publicar"}
    </button>
  );
};

export default SubmitButton;
