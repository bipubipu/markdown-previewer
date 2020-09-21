import React, { Component } from "react";

class Previewer extends Component {
  render() {
    return (
      <section className="container previewer">
        <h1>Previewer</h1>
        <div
          id="previewer"
          dangerouslySetInnerHTML={this.props.createMarkup()}
        ></div>
      </section>
    );
  }
}
export default Previewer;
