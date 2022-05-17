import React from 'react';
import './NewsLetter.css';

function NewsLetter() {
  return (
    <section className="newsletter">
        <form>
            <h3>subscribe for latest updates</h3>
            <input type="text" placeholder='enter your email' id="email" className="box" />
            <input type="text" value='subscribe' className="btn" />
        </form>
    </section>
  )
}

export default NewsLetter
