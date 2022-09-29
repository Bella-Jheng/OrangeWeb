import TextField from "@mui/material/TextField";

const Register = () => {
    return (
        <>
          <TextField
            id="standard-basic"
            label="帳號"
            variant="standard"
            required
            color="success"
            type="text"
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
          <TextField
            id="standard-basic"
            label="確認密碼"
            variant="standard"
            required
            color="success"
            type="password"
            margin="normal"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            required
            color="success"
            type="email"
            margin="normal"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="手機"
            variant="standard"
            required
            color="success"
            type="text"
            margin="normal"
            fullWidth
          />
        </>
      );
  }
  
  export default Register
  