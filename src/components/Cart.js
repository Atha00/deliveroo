import React from "react";

class Cart extends React.Component {
  render() {
    const products = [];
    for (let i = 0; i < this.props.selectedItem.length; i++) {
      products.push(
        <li key={this.props.selectedItem[i].id}>
          <button
            onClick={() => {
              this.props.onUpdate(this.props.selectedItem[i].id, -1);
            }}
          >
            -
          </button>
          <span>{this.props.selectedItem[i].quantity}</span>
          <button
            onClick={() => {
              this.props.onUpdate(this.props.selectedItem[i].id, 1);
            }}
          >
            +
          </button>
          <span>{this.props.selectedItem[i].name}</span>
          <span>
            {this.props.selectedItem[i].price *
              this.props.selectedItem[i].quantity}
          </span>
        </li>
      );
    }

    // console.log("products", products);

    return (
      <div>
        <button>Valider mon panier</button>
        <ul className="cartList">{products}</ul>
        <hr />
        <span>Sous-total</span>
        <span>{this.props.subTotal}</span>
      </div>
    );
  }
}

export default Cart;
