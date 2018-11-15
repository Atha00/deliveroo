import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import HeadItem from "./HeadItem";
import BodyItem from "./BodyItem";
import Cart from "./Cart";

class Home extends React.Component {
  state = {
    menuHead: {},
    menuBody: {},
    cart: [],
    toto: 0
  };
  // 1)
  render() {
    const entries = Object.entries(this.state.menuBody);
    const menuBodyItems = [];

    for (let i = 0; i < entries.length; i++) {
      menuBodyItems.push(<h2 key={i}>{entries[i][0]}</h2>);
      for (let j = 0; j < entries[i][1].length; j++) {
        menuBodyItems.push(
          <BodyItem
            key={entries[i][1][j].id}
            title={entries[i][1][j].title}
            description={entries[i][1][j].description}
            price={entries[i][1][j].price + " €"}
            image={entries[i][1][j].picture}
            //Aeration
            onClick={() => {
              const oldCart = this.state.cart;
              const newCart = [...oldCart];
              let productExist = false;
              for (let k = 0; k < newCart.length; k++) {
                if (newCart[k].id === entries[i][1][j].id) {
                  productExist = true;
                  newCart[k].quantity++;
                }
              }
              if (productExist === false) {
                newCart.push({
                  id: entries[i][1][j].id,
                  quantity: 1,
                  name: entries[i][1][j].title,
                  price: Number(entries[i][1][j].price)
                });
              }

              this.setState({
                cart: newCart
              });
            }}
          />
        );
      }
    }
    // console.log("etat new cart", this.state.cart);
    // console.log(menuBodyItems);
    return (
      <div className="main">
        <div>
          {/* <h2>Home</h2> */}
          {/* <Link to="/about">Lien vers About</Link> */}
          {/* {this.state.menuBody.Brunchs && this.state.menuBody.Brunchs[0].title} */}
          <HeadItem
            name={this.state.menuHead.name}
            description={this.state.menuHead.description}
            picture={this.state.menuHead.picture}
          />
        </div>
        <div className="body">
          <div>
            <Cart
              selectedItem={this.state.cart}
              onUpdate={(id, qty) => {
                const newCart = [...this.state.cart];
                for (let i = 0; i < newCart.length; i++) {
                  if (newCart[i].id === id) {
                    newCart[i].quantity = newCart[i].quantity + qty;
                    if (newCart[i].quantity < 0) {
                      newCart[i].quantity = 0;
                    }
                  }
                }

                console.log("newCart", newCart);
                this.setState({
                  cart: newCart
                });
              }}
              subTotal={() => {
                let tata = 0;
                const newCart = [...this.state.cart];
                for (let m = 0; m < newCart.length; m++) {
                  tata = tata + newCart[m].price * newCart[m].quantity;
                }
                this.setState({
                  toto: tata
                });
              }}
            />
          </div>
          {menuBodyItems}
        </div>
      </div>
    );
  }

  // 2)
  componentDidMount() {
    console.log("Did Mount");
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({
        menuHead: response.data.restaurant,
        menuBody: response.data.menu
      });
    });
  }
}

export default Home;
