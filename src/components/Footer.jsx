import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      <div className="container">
        <span className="text-muted">Example Website Footer with example Copyright Component &#169; {new Date().getFullYear()}</span>
      </div>
    </footer>
    );
  }
}

export default Footer
