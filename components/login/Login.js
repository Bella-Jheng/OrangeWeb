import React from 'react';
import TextField from "@mui/material/TextField";

const Login = () => {
    return (
      <>
        <TextField
          id="standard-basic"
          label="帳號"
          variant="standard"
          required
          color="success"
          type="email"
          margin="normal"
          fullWidth
        />
        <TextField
          id="standard-basic"
          label="密碼"
          variant="standard"
          required
          color="success"
          type="password"
          margin="normal"
          fullWidth
        />
      </>
    );
}

export default Login;
