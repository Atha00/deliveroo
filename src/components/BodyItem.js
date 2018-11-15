import React from "react";

class BodyItem extends React.Component {
  render() {
    return (
      <div className="bodyItem">
        <img className="imageBodyItem" alt="" src={this.props.image} />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
}

export default BodyItem;
