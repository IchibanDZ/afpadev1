// Panier.jsx
import React, { Component } from "react";
import "./Panier.css";

class Panier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produit: {
        nom: '',
        prix: 0,
        categorie: '',
        quantite: 0,
        image: ''
      },
      panier: [],
      totalAPayer: 0
    };
  }

  getProduit = (event) => {
    const produitSelectionne = this.props.products.find((p) => p.nom === event.target.value);
    this.setState({
      produit: {
        ...produitSelectionne,
        quantite: 1
      }
    });
  };

  getQuantite = (event) => {
    this.setState({
      produit: {
        ...this.state.produit,
        quantite: parseInt(event.target.value)
      }
    });
  };

  ajouter = () => {
    if (this.state.produit.nom && this.state.produit.prix > 0 && this.state.produit.quantite > 0) {
      this.setState({
        panier: [...this.state.panier, this.state.produit],
        produit: {
          nom: '',
          prix: 0,
          categorie: '',
          quantite: 0,
          image: ''
        },
        totalAPayer: this.state.totalAPayer + (this.state.produit.prix * this.state.produit.quantite)
      });
    }
  };

  render() {
    return (
      <div className="panier-container">
        <div className="ajout-produit">
          <h2>Ajouter au panier</h2>
          <div className="form-group">
            <label>Produit</label>
            <select onChange={this.getProduit} value={this.state.produit.nom}>
              <option value="">Sélectionnez un produit</option>
              {this.props.products.map((p, index) => (
                <option key={index} value={p.nom}>{p.nom}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Prix</label>
            <input type="text" value={this.state.produit.prix} readOnly />
          </div>

          <div className="form-group">
            <label>Catégorie</label>
            <input type="text" value={this.state.produit.categorie?.nom || ''} readOnly />
          </div>

          <div className="form-group">
            <label>Quantité</label>
            <input 
              type="number" 
              min="1"
              value={this.state.produit.quantite} 
              onChange={this.getQuantite}
            />
          </div>

          <button onClick={this.ajouter} className="btn-ajouter">
            Ajouter au panier
          </button>
        </div>

        <div className="panier-details">
          <h2>Votre Panier</h2>
          <table className="panier-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Produit</th>
                <th>Catégorie</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {this.state.panier.map((prod, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{prod.nom}</td>
                  <td>{prod.categorie.nom}</td>
                  <td>{prod.prix}€</td>
                  <td>{prod.quantite}</td>
                  <td>{(prod.prix * prod.quantite).toFixed(2)}€</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total">
            <h3>Total à payer: {this.state.totalAPayer.toFixed(2)}€</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Panier;
