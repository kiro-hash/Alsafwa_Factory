import "./App.css";

import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Export from "./pages/Export";
import Branches from "./pages/Branches";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/export" element={<Export/>}/>
        <Route path="/branches" element={<Branches/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
