import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    console.log("Hello");

    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });
      } else {
        console.log("erro");
      }
    });
  }

  render() {
    const { Topic, Description, PostCategory } = this.state.post;
    return (
      <div style={{ marginTop: "20px" }}>
        <h4>{Topic}</h4>
        <hr></hr>
        <dl className="row">
          <dt className="col-sm-3">Description</dt>
          <dd className="col-sm-9">{Description}</dd>
          <dt className="col-sm-3">Post Category</dt>
          <dd className="col-sm-9">{PostCategory}</dd>
        </dl>
      </div>
    );
  }
}
