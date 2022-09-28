import React from 'react';
import classes from './Banner.module.css'
import Image from "next/image";

function Banner(props) {
    return (
       <div className={classes.banner}>
            <Image alt="Banner" src="/Banner.png" width='80px' height='50px'/>
          <span className={classes.title}>{props.title}</span>
       </div>
    );
}

export default Banner;
