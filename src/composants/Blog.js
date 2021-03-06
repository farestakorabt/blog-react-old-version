import React, { Component } from "react";
import NvPost from "./NvPost/NvPost";
import PostModal from "./PostModal/PostModal";
import "./Blog.css";
import axios from "axios";
import Post from "./Post/Post";

class Blog extends Component {
  state = {
    posts: [],
    selectPostId: null,
    toggle: false,
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      // console.log(response);
      const articles = response.data.slice(0, 4);
      const authorArticle = articles.map((post) => {
        return {
          ...post,
          author: "Jaimmy",
        };
      });

      this.setState({ posts: authorArticle });
    });
  }

  selectId = (id) => {
    console.log(id);
    this.setState({ selectPostId: id });
    this.setState({ toggle: true });
  };

  toggleModal = () => {
    this.setState({ toggle: false });
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          titre={post.title}
          author={post.author}
          clicked={() => this.selectId(post.id)}
        />
      );
    });

    return (
      <div>
        <section>
          <NvPost />
        </section>
        <h2 className="text-center my-5">Choisissez un post ...</h2>
        <PostModal
          id={this.state.selectPostId}
          cache={this.toggleModal}
          toggle={this.state.toggle}
        />
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}

export default Blog;
