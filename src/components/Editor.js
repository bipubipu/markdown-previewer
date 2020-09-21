import React, { Component } from "react";

class Editor extends Component {
  render() {
    return (
      <section className="container editor">
        <h1>Editor</h1>
        <textarea
          id="editor"
          onChange={this.props.onChange}
          placeholder="Please enter your markdown. Not sure about this? Check https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
        ></textarea>
      </section>
    );
  }
}
export default Editor;
