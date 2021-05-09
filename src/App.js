import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Hello world"
    };
  }

  getData() {
    setTimeout(() => {
      console.log("Our data is fetched");
      this.setState({
        data: "Hello Connect Session!"
      });
    }, 1000);
  }

  componentDidMount() {
    console.log("componentDidMount!");
    this.getData();
  }

  render() {
    console.log("Render!");
    return <div>{this.state.data}</div>;
  }
}
