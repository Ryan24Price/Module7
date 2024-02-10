import { useState } from "react";
// import reactlogo from "../src/assets/react.svg"
// import viteLogo from "/vite.svg";
import "./App.css";
import BitcoinRates from "src/components/BitconRates.jsx";
import { MoodProvider } from "src/context/MoodContext";
import Emoji from "./components/Emoji";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "src/components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MoodProvider>
        <NavBar />
        <AppRoutes />
        <BitcoinRates />
        <Emoji />
      </MoodProvider>
    </>
  );
}

export default App;
