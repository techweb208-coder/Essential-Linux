import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Start from "./components/Start";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Contato from "./components/Contato";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <About />
              <Start />
              <Community />
            </>
          }
        />
        <Route path="/Contato" element={<Contato />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
