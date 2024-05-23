import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import "./index.scss"

const Footer = () => {
  return (
    <footer>
<div className="container">
  <div className="footer">
<div className="footer-left">
  <ul>
    <li>
      <a href="#">Blog</a>
    </li>
    <li>
      <a href="#">FAQs</a>
    </li>
    <li>
      <a href="#">ContactUS</a>
    </li>
  </ul>
</div>
<div className="footer-icons">
<CiFacebook />
<FaInstagram />
<FaSkype />
<CiTwitter />
<FaPinterest />


</div>
  </div>

  <div className="colorlib">
  <p>©2018 All Rights Reserverd. This template is made with  by Colorlib</p>
</div>

</div>
    </footer>
  )
}

export default Footer