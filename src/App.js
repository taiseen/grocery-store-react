import React from 'react'
import { Header, Home, Footer, Features, Products, Categories, Reviews, Blogs } from './components';
import './style/App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Products />
      <Categories />
      <Reviews />
      <Blogs />
      <Footer />
    </>
  )
}

export default App