import { useEffect, useRef } from 'react';
import Cart from './Cart/Cart';
import './Header.scss';

const Header = () => {

  const searchBox = useRef();
  const cartBox = useRef();
  const userLoginBox = useRef();
  const navBar = useRef();


  const toggleMenuBtn = () => {
    navBar.current.classList.toggle('userClick');
    searchBox.current.classList.remove('userClick');
    cartBox.current.classList.remove('userClick');
    userLoginBox.current.classList.remove('userClick');
  }

  const toggleSearchBtn = () => {
    searchBox.current.classList.toggle('userClick');
    cartBox.current.classList.remove('userClick');
    userLoginBox.current.classList.remove('userClick');
    navBar.current.classList.remove('userClick');

  }

  const toggleCartBtn = () => {
    cartBox.current.classList.toggle('userClick');
    searchBox.current.classList.remove('userClick');
    userLoginBox.current.classList.remove('userClick');
    navBar.current.classList.remove('userClick');

  }

  const toggleUserLoginBtn = () => {
    userLoginBox.current.classList.toggle('userClick');
    searchBox.current.classList.remove('userClick');
    cartBox.current.classList.remove('userClick');
    navBar.current.classList.remove('userClick');

  }

  useEffect(() => {

    window.addEventListener('scroll', () => {
      navBar.current.classList.remove('userClick');
      searchBox.current.classList.remove('userClick');
      cartBox.current.classList.remove('userClick');
      userLoginBox.current.classList.remove('userClick');
    })

  }, [])




  return (
    <header className="header">

      <a href="/#" className="logo">
        <i className="fas fa-shopping-basket"></i>
        groco
      </a>

      <nav className="navbar" ref={navBar}>
        <a href="/#home">home</a>
        <a href="/#features">features</a>
        <a href="/#products">products</a>
        <a href="/#categories">categories</a>
        <a href="/#reviews">review</a>
        <a href="/#blogs">blogs</a>
      </nav>

      <div className="icons">
        <div className="fas fa-bars" onClick={toggleMenuBtn}></div>
        <div className="fas fa-search" onClick={toggleSearchBtn}></div>
        <div className="fas fa-shopping-cart" onClick={toggleCartBtn}><span>3</span> </div>
        <div className="fas fa-user" onClick={toggleUserLoginBtn}></div>
      </div>

      <form action="#" className="search-form" ref={searchBox}>
        <input type="search" placeholder="Search here..." id="searchBox" />
        <label htmlFor="searchBox" className="fas fa-search"></label>
      </form>

      <Cart cartBox={cartBox} />

      <form action="#" className="login-form" ref={userLoginBox}>
        <h3>login now</h3>
        <input type="email" placeholder="your email" className="box" />
        <input type="password" placeholder="your password" className="box" />
        <p className="info">Forget your password <a href="/#">click here</a> </p>
        <p className="info">Don't have an account <a href="/#">create one</a> </p>
        <input type="submit" value="login now" className="btn" />
        <div className="otherLogin">
          <p>login with others media</p>
          <a href="/#" className="btn">Google</a>
          <a href="/#" className="btn">Facebook</a>
        </div>
      </form>
    </header>
  )
}

export default Header