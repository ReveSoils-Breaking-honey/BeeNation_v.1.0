import React from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeLanding from "./pages/HomeLanding";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import FulfilmentLanding from "./pages/FulfilmentLanding";
import MarketplaceLanding from "./pages/MarketplaceLanding";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/fulfilmentlanding":
        title = "";
        metaDescription = "";
        break;
      case "/marketplacelanding":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeLanding />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/fulfilmentlanding" element={<FulfilmentLanding />} />
      <Route path="/marketplacelanding" element={<MarketplaceLanding />} />
    </Routes>
  );
}
export default App;
