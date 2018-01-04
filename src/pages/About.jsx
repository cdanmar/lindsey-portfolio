import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './About.css';


class About extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Jumbotron title ="About" subtitle="Notice how the title and subtitle changes when you navigate." />
        <div className="container">
          <div className="outer-div">
            <div className="row">
              <div className="inner-divcol-lg-4 col-sm-12 text-center mb-4">
                <img className="rounded" src={require('../images/avatar.png')} alt="" />
                <br />
                <h3>Carlos Martinez
                </h3>
                <p><i>"Man, I finally got the CSS right!"</i></p>
                <ul className="list-inline list-social-icons mb-0">
                <li className="list-inline-item">
                  <a href="mailto:cdanmar@gmail.com">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/carlos-martinez-17ab15126/">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/cdanmar/react_router_bootstrap">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              </div>
            </div>
            <div>
              <p>
                Blue bottle gochujang cred everyday carry poutine lyft messenger bag small batch craft beer umami yuccie paleo. Salvia meggings mixtape, you probably haven't heard of them cronut banh mi meditation pitchfork distillery. Actually leggings williamsburg fanny pack tacos. Air plant iceland cred raw denim flexitarian mlkshk irony. La croix meh selvage squid 8-bit, raclette literally pug williamsburg.
              </p>
              <p>
                Readymade microdosing air plant waistcoat yr bicycle rights. Glossier master cleanse beard, put a bird on it flexitarian hella la croix cornhole fam bicycle rights. Sartorial mustache franzen, tilde echo park retro migas health goth banjo crucifix brunch venmo four loko marfa. Heirloom banjo chillwave, post-ironic chia four dollar toast tousled unicorn scenester chambray small batch pour-over. Selfies bitters yuccie enamel pin vape 3 wolf moon.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <Footer />
      </div>
    )
  };
}

export default About
