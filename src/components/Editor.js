import React, { Component } from "react";

class Editor extends Component {
  render() {
    return (
      <section className="container editor">
        <h1>Editor</h1>
        <textarea
          id="editor"
          onChange={this.props.onChange}
          placeholder="Please enter the markdown"
        ></textarea>
      </section>
    );
  }
}
export default Editor;
