import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="ClassComponent">
        <h2> {this.props.title}</h2>
        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }

  //if we want to send event listeners to child components:
  // <MyComponent title="React" onButtonClicked={this.onClickBtn} />
  //and inside the component
  //<button onClick={this.props.onButtonClicked}>Click Me!</button>

  //we can decompose, on render before return we can write
  //const { title, onButtonClicked } = this.props;
  //so h2 would be 
  //<h2>{title}</h2>
}


export default ClassComponent;