import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div>
        <nav style={{background:'black',padding:'5px 0 5px 0'}}>
  <div >
    {/* <div className='navbar-header'style={{width:'100px'}}>
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div> */}
    <ul >
      <li className='active' style={{display:'inline',padding:'10px'}}><a href="#" style={{color:'white'}}>Home</a></li>
      <li style={{display:'inline',padding:'10px'}}><a href="#" style={{color:'white'}}>Students</a></li>
      <li style={{display:'inline',padding:'10px'}}><a href="#" style={{color:'white'}}>Teachers</a></li>
      <li style={{display:'inline',padding:'10px'}}><a href="#" style={{color:'white'}}>Subjects</a></li>
      <li style={{display:'inline',padding:'10px'}}><a href="#"style={{color:'white'}}>Non-Acadamic</a></li>
      <li style={{display:'inline',padding:'10px'}}><a href="#"style={{color:'white'}}>Books</a></li>
    </ul>
  </div>
</nav>
<br></br>
<br></br>
      </div>
    )
  }
}
