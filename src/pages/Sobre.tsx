import React from "react";
import { motion } from "framer-motion";

export default function Sobre() {
  return (<>

    <motion.section
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-center text-white px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-pulse">Sobre mim</h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-6">
        Sou um desenvolvedor Full Stack com experiência em React, Node.js e PostgreSQL. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
      </p>
      <a href="/" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl shadow-lg">
        Voltar para o início
      </a>
    </motion.section>
    <motion.section 
    className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-center text-white px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-xl max-w-30xl mx-auto mt-16">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-indigo-400 tracking-tight border-b border-indigo-500 pb-2">
    💻 Minhas Habilidades
  </h2>
  <ul className="list-disc list-inside space-y-4 text-left flex">
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl max-w-3xl mx-auto mt-16 h">
    <li className="flex items-start gap-3">
      <span className="text-indigo-400 text-xl">✔</span>
      Desenvolvimento de <strong>APIs RESTful</strong>
    </li>
    </div>
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl max-w-3xl mx-auto mt-16 h">
    <li className="flex items-start gap-3">
      <span className="text-indigo-400 text-xl">✔</span>
      Integração com bancos de dados <strong>SQL</strong> e <strong>NoSQL</strong>
    </li>
    </div>
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl max-w-3xl mx-auto mt-16 h">
    <li className="flex items-start gap-3">
      <span className="text-indigo-400 text-xl">✔</span>
      Desenvolvimento de <strong>APIs RESTful</strong>
    </li>
    </div>
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl max-w-3xl mx-auto mt-16 h">
    <li className="flex items-start gap-3">
      <span className="text-indigo-400 text-xl">✔</span>
      Desenvolvimento de <strong>APIs RESTful</strong>
    </li>
    </div>
    </ul>
</div>

    </motion.section>
    </>
  );
}
