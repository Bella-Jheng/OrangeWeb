import React from 'react'

import classes from './Products.module.css';
import {popularProducts} from '../data'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div className={classes.container}>
      {
        popularProducts.map(item =>(
          <ProductItem item={item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default Products
