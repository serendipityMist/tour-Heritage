import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <>
      <main className="bg-[#f5f5f5]">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
