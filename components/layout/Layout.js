import React from 'react'
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation'
import Cart from '../cart/Cart';
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <Cart/>
      <main className={classes.main}>{props.children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
