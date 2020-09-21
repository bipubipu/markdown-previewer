import React, { Component } from "react";

class Editor extends Component {
  render() {
    return (
      <section className="editor">
        <h1>Editor</h1>
        <textarea
          id="editor"
          onChange={this.props.onChange}
          placeholder="Please enter your markdown. Not sure about this? Try searching markdown cheatsheet"
        ></textarea>
      </section>
    );
  }
}
export default Editor;
