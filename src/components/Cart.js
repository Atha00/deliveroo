import React from "react";

class Cart extends React.Component {
  render() {
    const products = [];
    for (let i = 0; i < this.props.selectedItem.length; i++) {
      let priceWithCents =
        Math.round(
          this.props.selectedItem[i].price *
            this.props.selectedItem[i].quantity *
            100
        ) / 100;
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
          <span>{priceWithCents.toFixed(2) + " €"}</span>
        </li>
      );
    }
    let subTotal = 0;
    for (let m = 0; m < this.props.selectedItem.length; m++) {
      subTotal =
        subTotal +
        Math.round(
          this.props.selectedItem[m].price *
            this.props.selectedItem[m].quantity *
            100
        ) /
          100;
    }
    let deliveryTax = 0;
    if (this.props.selectedItem.length > 0) {
      deliveryTax = 2.5;
    }
    let total = 0;
    if (this.props.selectedItem.length > 0) {
      total = subTotal + deliveryTax;
    }

    // console.log("products", products);

    return (
      <div className="fullCart">
        <button className="validButton">Valider mon panier</button>
        <ul className="cartList">{products}</ul>
        <hr />
        <div>
          <span>Sous-total</span>
          <span>{subTotal.toFixed(2) + " €"}</span>
        </div>
        <div>
          <span>Frais de livraison</span>
          <span>{deliveryTax.toFixed(2) + " €"}</span>
        </div>
        <hr />
        <div>
          <span>Total</span>
          <span>{total.toFixed(2) + " €"}</span>
        </div>
      </div>
    );
  }
}

export default Cart;
