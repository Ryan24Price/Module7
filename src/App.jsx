import { useState } from "react";
// import reactlogo from "../src/assets/react.svg"
// import viteLogo from "/vite.svg";
import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import { MoodProvider } from "./Context/MoodContext";
import Emoji from "./components/Emoji";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/Navbar"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MoodProvider>
        <NavBar />
        <AppRoutes />
        {/* <BitcoinRates /> */}
        {/* <Emoji /> */}
      </MoodProvider>
    </>
  );
}

export default App;
