import { margin } from "@mui/system";
import React from "react";

const myStyle={
  display:'flex',
  backgroundImage: 
"url('/Background.JPG')",
  height:'550px',
  fontSize:'30px',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition:'center',
  color: 'white',
  alignItems:'center',
  justifyContent:'center',
  fontStyle: 'italic',
  fontWeight:'bolder',
  '@media (maxWidth:480px)': {
    backgroundAttachment: 'none',
  },
};

const Picture = () => {
  return (
    <div style={myStyle}>『 憨憨仔做，儉儉仔食 』</div>
  );
};

export default Picture;
