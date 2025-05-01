import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Porti</h1>
      <nav className="flex space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/sobre" className="hover:text-gray-400">Sobre</a>
        <a href="/projetos" className="hover:text-gray-400">Projetos</a>
        <a href="/blog" className="hover:text-gray-400">Blog</a>
      </nav>
    </header>
  );
}