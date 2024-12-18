// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import List from './components/List/List';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/68bf5db20a3c236f68ed')
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      })
      .catch((error) => console.error("Erreur lors du chargement des données :", error));
  }, []);

  const updateCartItem = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: quantity }];
    });
  };

  return (
    <Router>
      <div className="App">
        <h1>Catalogue de Produits</h1>
        <Routes>
          <Route path="/" element={<List products={list} />} />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetail 
                products={list} 
                cart={cart} 
                updateCart={updateCartItem}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
