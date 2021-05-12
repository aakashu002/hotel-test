import React, { Component } from 'react'
import Data from "./Data"
import Head from "./Head"
import Resturent from "./Resturent"
import Footer from "./Footer"
import {BrowserRouter as Router,Route} from 'react-router-dom'
 class App extends Component {


  render() {
    return (
      <div>

      <Router>
      <Head/>
        <Route path="/" exact component={Data}/>
        <Route path="/Resturent" component={Resturent}/>
        <Footer/>
        </Router>
      </div>
    )
  }
}

export default App
