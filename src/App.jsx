import "typeface-montserrat";
import NavBar from "./Layouts/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Home />
      <Product />
    </div>
  );
}

export default App;
