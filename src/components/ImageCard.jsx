import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  render() {
    const { urls } = this.props.image;
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        className='img'
        ref={this.imageRef}
        src={urls.regular}
        alt=''
      />
    );
  }
}

export default ImageCard;
