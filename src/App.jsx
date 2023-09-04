import "typeface-montserrat";
import Footer from "./Layouts/Footer/Footer";
import NavBar from "./Layouts/NavBar/NavBar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";

function App() {
  return (
    <div className="font-sans">
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
