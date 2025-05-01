import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Header from "./components/Header";
import "./index.css";
// import Footer from "./components/Footer";  
import "./index.css";
import React from "react";


function ConditionalLayout() {
  const location = useLocation();

  // Rotas que NÃO devem exibir o Header
  const hideHeaderRoutes = ["/", "/cadastro"];

  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ConditionalLayout />
    </BrowserRouter>
  );
}

export default App;
