import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page/main-page";
import { Vacancies } from "./pages/vacancies/vacancies";
import { AboutUs } from "./pages/about-us/about-us";
import { Contacts } from "./pages/contacts/contacts";
import { OurCrew } from "./pages/our-crew/our-crew";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="vacancies" element={<Vacancies />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="our-crew" element={<OurCrew />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
  </BrowserRouter>
);
