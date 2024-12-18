// components/Product/Product.jsx
import { useNavigate } from 'react-router-dom';
import './Product.css';


function Product({ nom, prix, image, categorie }) {
  const navigate = useNavigate();

  return (
    <div 
      className="product-contain" 
      onClick={() => navigate(`/product/${encodeURIComponent(nom)}`)}
    >
      <div className="product">
        <img src={image} alt={nom} className="product-image"/>
        <h3 className="product-name">{nom}</h3>
        <h3 className="product-prix">{prix} €</h3>
        <h3 className="product-categorie">{categorie.nom}</h3>
        <hr />
      </div>
    </div>
  );
}

export default Product;
