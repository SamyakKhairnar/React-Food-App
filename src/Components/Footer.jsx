import React from 'react'
import '../index.css';

export default function 
() {
  return (
    <div className='footer'>
        <p>Copyright &#169; 2022 All Rights Reserved</p>
        <ul className="social-links list-non-bullet">
            <li className="list-item-inlines">
              <a className="links" target="_blank" href="https://www.facebook.com/SamyakKhairnar">
                <i className="fa-brands fb fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-item-inlines">
              <a className="links" target="_blank" href="https://twitter.com/SamyakKhairnar">
                <i className="fa-brands tw fa-twitter"></i>
              </a>
            </li>
            <li className="list-item-inlines">
              <a className="links" target="_blank" href="https://github.com/SamyakKhairnar">
                <i className="fa-brands git fa-github"></i>
              </a>
            </li>
            <li className="list-item-inlines">
              <a className="links" target="_blank" href="https://www.linkedin.com/in/samyakkhairnar/">
                <i className="fa-brands in fa-linkedin-in"></i>
              </a>
            </li>
        </ul>
    </div>
  )
}
