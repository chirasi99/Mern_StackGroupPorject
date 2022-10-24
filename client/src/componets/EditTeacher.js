import React, { Component } from "react";
import axios from "axios";

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Topic: "",
      Desription: "",
      PostDescription: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;

    const { Topic, Desription, PostCategory } = this.state;
    const data = {
      Topic: Topic,
      Desription: Desription,
      PostCategory: PostCategory,
    };

    axios.put(`/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Post Updated Successfully");
        this.setState({
          Topic: "",
          Desription: "",
          PostDescription: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          Topic: res.data.post.Topic,
          Desription: res.data.post.Desription,
          PostCategory: res.data.post.PostCategory,
        });
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
        <form className="needs-validation" noValidate>
          <div classname="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Topic</label>
            <input
              type="text"
              className="form-control"
              name="Topic"
              placeholder="Enter Topic"
              value={this.state.Topic}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div classname="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Description</label>
            <input
              type="text"
              className="form-control"
              name="Description"
              placeholder="Enter Description"
              value={this.state.Desription}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div classname="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Post Category</label>
            <input
              type="text"
              className="form-control"
              name="postCategory"
              placeholder="Enter Post Category"
              value={this.state.PostCategory}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
        </form>
      </div>
    );
  }
}
