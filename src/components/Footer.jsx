import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      <div className="container text-center">
        <span className="text-muted">Lindsey Wiseman &#169; {new Date().getFullYear()}</span>
      </div>
    </footer>
    );
  }
}

export default Footer
