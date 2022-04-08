import React, { Component } from "react";
import axios from "axios";
import "./NvPost.css";

class NvPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Hugo",
  };

  postArticle = () => {
    const nvPost = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", nvPost)
      .then((response) => {
        console.log(response);
      });
    this.setState({
      title: "",
      content: "",
      author: "",
    });
  };

  render() {
    return (
      <div className="NvPost form-group">
        <h1>Ajouter un Article</h1>
        <label>Titre</label>
        <input
          className="form-control"
          type="text"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />

        <label>Contenu</label>
        <textarea
          className="form-control"
          rows="4"
          value={this.state.content}
          onChange={(e) => this.setState({ content: e.target.value })}
        />

        <label>Auteur</label>
        <select
          className="form-control"
          value={this.state.author}
          onChange={(e) => this.setState({ author: e.target.value })}
        >
          <option value="Hugo">Hugo</option>
          <option value="Juliette">Juliette</option>
          <option value="John">John</option>
        </select>
        <button className="btn btn-success my-3" onClick={this.postArticle}>
          Ajouter un Article
        </button>
      </div>
    );
  }
}

export default NvPost;
