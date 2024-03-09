import { Button, TextField, Typography } from '@mui/material'


const LoginForm = () => {
  return (
    <>
                <Typography variant='h5'>Login</Typography>
    
    <form action="" style={{
        width:'100%',
        marginTop:'1rem'
    }}>
        <TextField required fullWidth label='Username' margin='normal' variant='outlined' />

        <TextField required fullWidth label='Password' margin='normal'  type='password' variant='outlined' />

        <Button variant='outlined' color='primary' type='submit'>
            Login
        </Button>

   


    </form>
        </>
  )
}

export default LoginForm