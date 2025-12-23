import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Actions from "./components/Actions";
import About from "./components/About";
import Info from "./components/Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div id="layout">
          <Header />
          <div id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/akcije" element={<Actions />} />
              <Route path="/o-nama" element={<About />} />
              <Route path="/informacije" element={<Info />} />
              <Route path="/ponuda" element={<Content />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
