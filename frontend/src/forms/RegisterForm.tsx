import { CameraAlt } from '@mui/icons-material'
import { Avatar, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'


const RegisterForm = () => {
  return (
    <>
                <Typography variant='h5'>Register</Typography>
              
    
    <form action="" style={{
        width:'100%',
        marginTop:'1rem'
    }}>
  <Stack position='relative' width='10rem' margin='auto'>
    <Avatar sx={{
        width:'10rem',
        height:'10rem',
        objectFit:'contain'
    }} />
    <IconButton 
    

    sx={{
        position:"absolute",
        bottom:0,
        right:0,
        color:'white',
        bgcolor:'rgba(0,0,0,0.5)',
        ":hover":{
            bgcolor:'rgba(0,0,0,0.2)'
        }
        
    }}
    
    component='label'
    >

<CameraAlt />
<VisuallyHiddenInput type='file' />
        </IconButton>

                    
                    </Stack>

        <TextField required fullWidth label='Name' margin='normal' variant='outlined' />
        <TextField required fullWidth label='Bio' margin='normal' variant='outlined' />
        <TextField required fullWidth label='Username' margin='normal' variant='outlined' />


        <TextField required fullWidth label='Password' margin='normal'  type='password' variant='outlined' />

        <Button variant='outlined' color='primary' type='submit'>
            Sign up
        </Button>

   


    </form>
        </>
  )
}

export default RegisterForm