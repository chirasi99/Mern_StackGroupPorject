import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddStudent from "./componets/AddStudent";
import DeleteStudent from "./componets/DeleteStudent";
import EditStudent from "./componets/EditStudent";
import ViewStudent from "./componets/ViewStudent";
import Student from "./componets/Student";

import Book from "./componets/Book";
import AddBook from "./componets/AddBook";
import DeleteBook from "./componets/DeleteBook";
import EditBook from "./componets/EditBook";
import ViewBook from "./componets/ViewBook";

import AddTeacher from "./componets/AddTeacher";
import EditTeacher from "./componets/EditTeacher";
import Home from "./componets/Home";
import NavBar from "./componets/NavBar";
import ViewTeacher from "./componets/ViewTeacher";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/add" element={<AddTeacher />}></Route>
            <Route path="/edit/:id" element={<EditTeacher />}></Route>
            <Route path="/view/:id" element={<ViewTeacher />}></Route>

            <Route exact path="/student" element={<Student />}></Route>
            <Route exact path="/student/add" element={<AddStudent />}></Route>
            <Route
              exact
              path="/student/edit/:id"
              element={<EditStudent />}
            ></Route>
            <Route
              exact
              path="/student/post/:id"
              element={<DeleteStudent />}
            ></Route>
            <Route
              exact
              path="/student/post/:id"
              element={<ViewStudent />}
            ></Route>

            <Route exact path="/book" element={<Book />}></Route>
            <Route exact path="/book/add" element={<AddBook />}></Route>
            <Route exact path="/book/edit/:id" element={<EditBook />}></Route>
            <Route exact path="/book/post/:id" element={<DeleteBook />}></Route>
            <Route exact path="/book/post/:id" element={<ViewBook />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
