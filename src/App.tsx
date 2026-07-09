import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Home from './pages/Home'
import About from './pages/About';

function App() {
    const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App