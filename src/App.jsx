import "typeface-montserrat";
import Footer from "./Layouts/Footer/Footer";
import NavBar from "./Layouts/NavBar/NavBar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const btn = document.getElementById("test-notifi");
    console.log({btn})
    btn.addEventListener("click", () => {
      Notification.requestPermission().then(async function (permission) {
        if (permission === "granted") {
          alert("notification granted");
        }
      });
    });
  }, []);
  return (
    <div className="font-sans">
      <button id="test-notifi">test</button>
      <NavBar />
      <Home />
      <Product />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
