import React from 'react';
import Link from "next/link";
import Styles from "../styles/Nav.module.css"

const Nav = () => {
  return (
    <div>
        <ul className={Styles.navItems} >
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li> 
            <li><Link href="/blog"><a>Blog</a></Link></li> 
            <li><Link href="/contact"><a>Contact</a></Link></li> 
        </ul>
    </div>
  )
}
export default Nav;