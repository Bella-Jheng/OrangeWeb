import React from 'react'

import classes from './Products.module.css';
import {allProducts} from '../data'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div className={classes.container}>
      {
        allProducts.map(item =>(        
          <ProductItem item={item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default Products
