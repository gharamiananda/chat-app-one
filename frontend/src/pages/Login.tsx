import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';

const Login = () => {
    const[isLogin, setIsLogin]=useState(true);

    const toggleLogin=()=>{
        setIsLogin(prev=>!prev)
    }

  return (
    <Container component='main' maxWidth='xs'  sx={{height:'100vh',
    
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
    }}>
        <Paper elevation={3} sx={{
            padding:4,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        }}>


            {
                isLogin ?  <>
                
               <LoginForm />

                <Typography textAlign='center'>OR</Typography>

                <Button variant='text' fullWidth  onClick={toggleLogin}>
                        Register
                    </Button>


                </> :<>
                
                <RegisterForm/>
                
                <Typography textAlign='center'>OR</Typography>

<Button variant='text' fullWidth  onClick={toggleLogin}>
        Login
    </Button>
                </>
            }

        </Paper>
    </Container>
  )
}

export default Login