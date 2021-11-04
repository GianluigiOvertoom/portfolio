import React from 'react';

export default class Footer extends React.Component
{
  render()
  {
    return (
      <footer id="footer">
        <ul className="footer-left">
          <li className="footer-left-text">C#/Unity developer, pixel artist, student OpenICT</li>
          <li className="footer-left-text">luigi@spammail.com</li>
        </ul>
        <ul className="footer-right">
          <img src={require('./images/github.svg').default} className="footer-icon" alt="" />
          <img src={require('./images/linkedin.svg').default} className="footer-icon" alt="" />
        </ul>
      </footer> 
    );
  }
}