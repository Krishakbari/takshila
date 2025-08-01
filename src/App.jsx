import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './index.css'; // Keep this if you're using Tailwind CSS
import AboutUs from './pages/AboutUs';
import Navbarr from './components/Navbarr';
import Footer from './components/Footer';
import Services from './pages/Services';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './components/ScrollToTop';
import Documentation from './pages/Documentation';
import Inquiry from './pages/Inquiry';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';


function App() {
  return (
    <>
      <Navbarr />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/product' element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
