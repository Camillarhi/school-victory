import "typeface-montserrat";
import NavBar from "./Layouts/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Home />
      <Product />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
