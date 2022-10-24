import React, { Component } from "react";
import axios from "axios";

export default class EditTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Subject: "",
      Address: "",
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

    const { Name, Subject, Address } = this.state;
    const data = {
      Name: Name,
      Subject: Subject,
      Address: Address,
    };

    axios.put(`/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Post Updated Successfully");
        this.setState({
          Name: "",
          Subject: "",
          Address: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          Topic: res.data.post.Name,
          Desription: res.data.post.Subject,
          PostCategory: res.data.post.Address,
        });
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit Teacher's Record</h1>
        <form className="needs-validation" noValidate>
          <div classname="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Name</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              placeholder="Enter Name"
              value={this.state.Name}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div classname="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Subject</label>
            <input
              type="text"
              className="form-control"
              name="Subject"
              placeholder="Enter Subject"
              value={this.state.Subject}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div classname="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Address</label>
            <input
              type="text"
              className="form-control"
              name="Address"
              placeholder="Enter Address"
              value={this.state.Address}
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
