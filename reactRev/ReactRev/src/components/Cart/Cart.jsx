// components/Cart/Cart.jsx
import './Cart.css';

function Cart({ cart, updateCart }) {
  const total = cart.reduce((sum, item) => sum + (item.prix * item.quantity), 0);

  return (
    <div className="cart">
      <h2>Panier</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.nom} />
          <div className="item-details">
            <h3>{item.nom}</h3>
            <p>{item.prix} €</p>
            <div className="quantity-control">
              <button 
                onClick={() => updateCart(item, Math.max(0, item.quantity - 1))}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => updateCart(item, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: {total.toFixed(2)} €</h3>
      </div>
    </div>
  );
}

export default Cart;
