import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import News from "./components/News";
import Contact from "./components/Contact";

const App = () => {
  const [company, setCompany] = useState({});

  useEffect(() => {
    // Get company information from an API
    const fetchCompany = async () => {
      const response = await fetch("https://example.com/api/company");
      const data = await response.json();
      setCompany(data);
    };
    fetchCompany();
  }, []);

  return (
    <BrowserRouter>
      <div className="container mx-auto px-4">
        <Navbar company={company} />
        <Routes>
          <Route path="/" element={<Home company={company} />} />
          <Route path="/products" element={<Products company={company} />} />
          <Route path="/services" element={<Services company={company} />} />
          <Route path="/news" element={<News company={company} />} />
          <Route path="/contact" element={<Contact company={company} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
import Navbar from "./components/Navbar";

const App = () => {
  const [company, setCompany] = useState({});

  return (
    <BrowserRouter>
      <div className="container mx-auto px-4">
        <Navbar company={company} />
        <Routes>
          ...
        </Routes>
      </div>
    </BrowserRouter>
  );
};
import Home from "./components/Home";

const App = () => {
  const [company, setCompany] = useState({});

  return (
    <BrowserRouter>
      <div className="container mx-auto px-4">
        <Navbar company={company} />
        <Routes>
          <Route path="/" element={<Home company={company} />} />
          ...
        </Routes>
      </div>
    </BrowserRouter>
  );
};
import Products from "./components/Products";

const App = () => {
  const [company, setCompany] = useState({});

  return (
    <BrowserRouter>
      <div className="container mx-auto px-4">
        <Navbar company={company} />
        <Routes>
          <Route path="/" element={<Home company={company} />} />
          <Route path="/products" element={<Products company={company} />} />
          ...
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Products = ({ company }) => {
  const products = company.products;

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">محصولات</h1>
      <ul className="list-unstyled">
        {products.map((product) => (
          <li key={product.id}>
            <a href="#">
              <img src={product.image} alt={product.name} />
              <h2 className="text-lg">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
import Services from "./components/Services";

function App() {
    const [company, setCompany] = useState({});

    return (
        <BrowserRouter>
            <div className="container mx-auto px-4">
                <Navbar company={company} />
                <Routes>
                    <Route path="/" element={<Home company={company} />} />
                    <Route path="/products" element={<Products company={company} />} />
                    <Route path="/services" element={<Services company={company} />} />
                    ...
                </Routes>
            </div>
        </BrowserRouter>
    );
}

const Services = ({ company }) => {
  const services = company.services;

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">خدمات</h1>
      <ul className="list-unstyled">
        {services.map((service) => (
          <li key={service.id}>
            <h2 className="text-lg">{service.name}</h2>
            <p className="text-gray-500">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
