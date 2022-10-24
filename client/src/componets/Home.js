import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/teachers").then((res) => {
      if (res.data.success) {
        this.setState({
          teachers: res.data.existingPosts,
        });
        console.log(this.state.teachers);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/teacher/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    });
  };

  render() {
    return (
      <div className="container">
        <p>All Details of Teachers</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.teachers.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/teacher/${posts._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {posts.Name}
                  </a>
                </td>
                <td scope>{posts.Subject}</td>
                <td scope>{posts.Address}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(posts._id)}
                  >
                    <i className="fas fa-trash-alt"></i>&nbsp; Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">
          <a href="/add" style={{ textDecoration: "none", color: "white" }}>
            Add New Teacher Record
          </a>
        </button>
      </div>
    );
  }
}
