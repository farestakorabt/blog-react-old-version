import React, { Component } from "react";
import axios from "axios";
import "./PostModal.css";

class PostModal extends Component {
  state = {
    loadedPosts: null,
  };

  componentDidUpdate() {
    // console.log("UPDATED");
    if (this.props.id) {
      if (
        !this.state.loadedPosts ||
        (this.state.loadedPosts && this.state.loadedPosts.id !== this.props.id)
      ) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then((response) => {
            // console.log(response);
            this.setState({ loadedPosts: response.data });
          });
      }
    }
  }

  render() {
    return this.state.loadedPosts && this.props.toggle ? (
      <div className="PostComplet">
        <h1> {this.state.loadedPosts.title} </h1>
        <p> {this.state.loadedPosts.body} </p>

        <button
          className="btn btn-danger my-3 btnPost"
          onClick={this.props.cache}
        >
          Fermer
        </button>
      </div>
    ) : null;
  }
}

export default PostModal;
