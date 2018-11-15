import React from "react";

class BodyItem extends React.Component {
  render() {
    return (
      <div className="bodyItem" onClick={this.props.onClick}>
        <div>
          <h3 className="bodyItemTitle">{this.props.title}</h3>
          <p className="bodyItemDes">{this.props.description}</p>
          <p className="bodyItemPrice">{this.props.price}</p>
        </div>
        <div className="bodyImageDiv">
          <img className="imageBodyItem" alt="" src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default BodyItem;
