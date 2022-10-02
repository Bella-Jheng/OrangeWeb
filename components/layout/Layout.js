import React,{useState} from 'react'
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation'
import Cart from '../cart/Cart';
import Footer from './Footer'

const Layout = (props) => {
  const [isOpen, setState] = useState(false);

  const toggleDrawer = () => {
    setState((prevState) => (!prevState));
  };

  return (
    <div>
      <MainNavigation handleCart={toggleDrawer}/>
     <Cart  handleCart={toggleDrawer} isOpenCart={isOpen}/>
      <main className={classes.main}>{props.children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
