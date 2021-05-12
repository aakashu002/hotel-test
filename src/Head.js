import React, { Component } from 'react'
import { Link } from 'react-router-dom';


 class Head extends Component {
    
    openWin=()=> {
        window.open("https://www.w3schools.com");
        console.log("worked")
      }
    render() {
        return (
            <div>
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Book Your Dine</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          List of Hotels
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" onClick={this.openWin}>Mission Chinese Food</a>
          <a class="dropdown-item" href="#">Emily</a>
          <a class="dropdown-item" href="#">Kang Ho Dong Baekjeong</a>
          <a class="dropdown-item" href="#">Katz's Delicatessen</a>
          <a class="dropdown-item" href="#">Roberta's Pizza</a>
          <a class="dropdown-item" href="#">Hometown BBQ</a>
          <a class="dropdown-item" href="#">Superiority Burger</a>
          <a class="dropdown-item" href="#">The Dutch</a>
          <a class="dropdown-item" href="#">Mu Ramen</a>
          <a class="dropdown-item" href="#">Casa Enrique</a>

        
        </div>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link " to="/Resturent">Restaurant</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
            </div>
        )
    }
}

export default Head
