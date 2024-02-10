import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Homepage from "../pages/Homepage";
import BitcoinRates from "../components/BitcoinRates";
import LoginPage from "../pages/LoginPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="login" element={<LoginPage {...props} />} />
      <Route index element={<Homepage {...props} />} />
      <Route path="bitcoin" element={<BitcoinRates {...props} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;