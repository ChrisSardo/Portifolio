import React from "react";

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-center text-white px-6">
  <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-pulse">Christian Sardo</h1>
  <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-6">
    Full Stack Developer • APIs • Cloud • React • Node • PostgreSQL
  </p>
  <div className="flex gap-6">
    <a href="/sobre" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl shadow-lg">Sobre mim</a>
    <a href="/projetos" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl shadow-lg">Projetos</a>
    <a href="/blog" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl">Blog Técnico</a>
  </div>
</section>

  );
}
