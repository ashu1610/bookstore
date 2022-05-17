import React from "react";
import "./Icons.css";

function Icons() {
  return (
    <section className="icons-container">

      <div className="icons">
        <i className="fas fa-plane"></i>
        <div className="content">
          <h3>free shipping</h3>
          <p>order over $100</p>
        </div>
      </div>

      <div className="icons">
        <i className="fas fa-lock"></i>
        <div className="content">
          <h3>secure payment</h3>
          <p>100 secure payment</p>
        </div>
      </div>
    
      <div className="icons">
        <i className="fas fa-redo-alt"></i>
        <div className="content">
          <h3>easy return</h3>
          <p>10 days returns</p>
        </div>
      </div>

      <div className="icons">
        <i className="fas fa-headset"></i>
        <div className="content">
          <h3>24/7 support</h3>
          <p>call us anytime</p>
        </div>
      </div>

    </section>
  );
}

export default Icons;
