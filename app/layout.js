import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TechBoard V1",
  description: "Articulos tecnicos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 min-h-screen`}>
        <nav className="bg-white border-b border-gray-200 top-0 z-10">
          <div className="flex flex-row items-center justify-between px-6 h-16">
            <Link href={"/"} className="text-xl font-bold text-blue-600">
              TechBoard <span className="text-gray-900">V1</span>
            </Link>

            <div className="flex gap-2">
              <Link
                className="text-gray-600 hover:text-gray-900 font-medium"
                href={"/"}
              >
                Inicio
              </Link>
              <Link
                className="text-blue-600 hover:text-blue-800 font-medium"
                href={"/submit"}
              >
                Publicar
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
