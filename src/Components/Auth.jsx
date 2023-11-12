import { Box, Button, TextField, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import React, { useState } from "react";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handelChange = (e)=>{
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name] : e.target.value
    }))
  }
  const handelSubmit = (e)=>{
    e.preventDefault()
  }
  const resetState = ()=>{
        setIsSignup(!isSignup);
        setFormData({name:"",email:"",password:""})
  }
  return (
    <div>
      <from onSubmit={handelSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? 'SignUp' : 'Login'}
          </Typography>
          {isSignup && (
            <TextField
              variant="outlined"
              type={"text"}
              value={formData?.name}
              placeholder="Name"
              margin="normal"
              name="name"
              onChange={handelChange}
            />
          )}
          <TextField
            variant="outlined"
            type={"email"}
            value={formData?.email}
            placeholder="Email"
            margin="normal"
            name="email"
            onChange={handelChange}
          />
          <TextField
            variant="outlined"
            type={"password"}
            value={formData?.password}
            placeholder="Password"
            margin="normal"
            name="password"
            onChange={handelChange}
          />
          <Button
          endIcon={isSignup ? <HowToRegIcon/> : <LoginIcon/>}
          type="submit"
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {isSignup ? 'SignUp' : 'Login'}
          </Button>
          <Button
          endIcon={!isSignup ? <HowToRegIcon/> : <LoginIcon/>}
            sx={{ marginTop: 3, borderRadius: 3 }}
            onClick={resetState}
          >
            {isSignup ? 'Change to Login': 'Change to SignUp'}
          </Button>
        </Box>
      </from>
    </div>
  );
}

export default Auth;
