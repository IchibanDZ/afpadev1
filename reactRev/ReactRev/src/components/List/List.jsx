import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./List.css";

function List({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]); 

  
  const categories = ["All", "épices", "céréales", "conserves", "confiseries"];

  // Met à jour les produits filtrés chaque fois que `products` change
  useEffect(() => {
    setFilteredProducts(products); 
  }, [products]);

  // Fonction pour filtrer les produits par catégorie
  const filterProducts = (category) => {
    if (category === "All") {
      setFilteredProducts(products); 
    } else {
      const filtered = products.filter((product) => product.categorie.nom === category);
      setFilteredProducts(filtered); 
    }
  };

  return (
    <div>
      {/* Boutons pour filtrer par catégorie */}
      <div className="button-container">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => filterProducts(category)}
            className="filter-button"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Liste des produits filtrés */}
      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product
              key={index}
              nom={product.nom}
              prix={product.prix}
              image={product.image}
              categorie={product.categorie}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default List;
