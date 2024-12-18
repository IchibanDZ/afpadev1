// components/ProductDetail/ProductDetail.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import './ProductDetail.css';

function ProductDetail({ products, cart, updateCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    
  
    const cartItem = cart.find(item => item.id === parseInt(id));
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [id, products, cart]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    if (product) {
      updateCart(product, newQuantity);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img src={product.image} alt={product.nom} />
        <div className="product-info">
          <h2>{product.nom}</h2>
          <p className="price">{product.prix} €</p>
          <p className="category">{product.categorie.nom}</p>
          <div className="quantity-control">
            <button 
              onClick={() => handleQuantityChange(Math.max(0, quantity - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>
          <button 
            className="add-to-cart"
            onClick={() => updateCart(product, quantity)}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default ProductDetail;
