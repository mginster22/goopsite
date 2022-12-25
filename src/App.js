import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <div className="container mx-auto py-6 px-2">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
