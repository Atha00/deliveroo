import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import HeadItem from "./HeadItem";
import BodyItem from "./BodyItem";

class Home extends React.Component {
  state = {
    menuHead: {},
    menuBody: {}
  };
  // 1)
  render() {
    const entries = Object.entries(this.state.menuBody);
    const menuBodyItems = [];

    for (let i = 0; i < entries.length; i++) {
      menuBodyItems.push(<h2>{entries[i][0]}</h2>);
      for (let j = 0; j < entries[i][1].length; j++) {
        menuBodyItems.push(
          <BodyItem
            title={entries[i][1][j].title}
            description={entries[i][1][j].description}
            price={entries[i][1][j].price + " €"}
            image={entries[i][1][j].picture}
          />
        );
      }
    }
    console.log(menuBodyItems);
    return (
      <div>
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
        <div className="body">{menuBodyItems}</div>
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
