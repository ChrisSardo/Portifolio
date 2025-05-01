import React from "react";

export default function Sobre() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-center text-white px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-pulse">Sobre mim</h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-6">
        Sou um desenvolvedor Full Stack com experiência em React, Node.js e PostgreSQL. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
      </p>
      <a href="/" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl shadow-lg">Voltar para o início</a>
    </section>
  );
}