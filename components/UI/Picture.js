import React from "react";
import classes from "./Picture.module.css";

// const myStyle={
//   display:'flex',
//   backgroundImage: 
// "url('/Background.JPG')",
//   height:'550px',
//   fontSize:'30px',
//   backgroundAttachment: 'fixed',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition:'center',
//   color: 'white',
//   alignItems:'center',
//   justifyContent:'center',
//   fontStyle: 'italic',
//   fontWeight:'bolder',
//   '@media (maxWidth:480px)': {
//    height:'100%'
//   },
//   '@media (maxWidth: 500px)': {
//     display: 'none',
//   },
// };


const Picture = () => {
  return (
    <div className={classes.picture}>『 憨憨仔做，儉儉仔食 』</div>
  );
};

export default Picture;
