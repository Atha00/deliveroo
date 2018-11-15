import React from "react";

class HeadItem extends React.Component {
  render() {
    return (
      <div className="topItem">
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.description}</p>
        </div>
        <div>
          <img className="imageTopItem" alt="" src={this.props.picture} />
        </div>
      </div>
    );
  }
}

export default HeadItem;
