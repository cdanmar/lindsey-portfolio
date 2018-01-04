import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Images from '../components/Images.jsx';
import './Home.css'


class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Jumbotron title ="Lindsey Wiseman" subtitle="Selected Works" />
        <br />
        <div className="container">
          <div className="outer-div">
            <Images />
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    )
  };
}

export default Home
