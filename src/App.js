import React, { Component } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import marked from "marked";

class App extends Component {
  state = { text: "" };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    this.createMarkup();
  };
  createMarkup = () => {
    marked.setOptions({
      breaks: true,
    });
    return {
      __html: marked(this.state.text),
    };
  };
  render() {
    return (
      <div className="container">
        <Editor onChange={this.handleChange}></Editor>
        <Previewer
          type="previewer"
          createMarkup={this.createMarkup}
        ></Previewer>
      </div>
    );
  }
}

export default App;
