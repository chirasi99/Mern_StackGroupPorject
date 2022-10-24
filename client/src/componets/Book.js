import React, { Component } from 'react'
import axios from 'axios';


export default class Book extends Component {
constructor(props){
  super(props);

  this.state={
    books:[] //array 
  };
}


componentDidMount(){


  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:3500/book").then(res=>{
  if(res.data.Success){
    this.setState({
      books:res.data.resulting  //array above
    });
    console.log(this.state.books);
   
  }
  });
}
  
  
  render() {
    return (
      <div className="container">
       <p>Books</p>
       <table className="table">
         <thead>
           <tr>
            <th scope="col">No</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Title</th>
            <th scope="col">ISBN</th>
            <th scope="col">No of Copies</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
           </tr>
          
         </thead>
         <tbody>
          {this.state.books.map((books,index)=>(
            <tr>
              <th scope="raw">{index+1}</th>
              <td>
                 <a href={`/book/${'books_id'}`} style={{textDecoration:'none'}}>
                      {books.bookName}
                 </a>
                 
              </td>
              <td>{books.authorName}</td>
              <td>{books.title}</td>
              <td>{books.ISBN}</td>
              <td>{books.noOfCopies}</td>
              <td>{books.description}</td>
              <td>
                <a className= 'btn btn-warning' href = "#">
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className= 'btn btn-danger' href = "#">
                  <i className='far fa-trash-alt'></i>&nbsp;Delete
                </a>
              </td>
            </tr>
          ))}
         </tbody>

       </table>
       <button className='btn btn-success'><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Book</a></button>
      </div>
    )
  }
}
