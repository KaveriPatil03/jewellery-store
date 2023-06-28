// import { Link } from 'react-router-dom';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
// import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';
import CartPage from './Components/CartPage';
import CheckOut from './Components/CheckOut';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    {/* <Header/> */}
      <HashRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/products" element={<Product />}>
          </Route>
          <Route path="/products/:id" element={<ProductDetails />}>
          </Route>
          <Route path="/cart" element={<CartPage />}>
          </Route>
          <Route path="/checkout" element={<CheckOut />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
