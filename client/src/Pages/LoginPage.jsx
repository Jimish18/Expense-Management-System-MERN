import React, { useContext, useEffect } from 'react'
import * as yup from "yup";
import 
{
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { UserContext } from '../context/UserContext';


const loginSchema = yup.object().shape(
  {
    email : yup.string().email("invalid Email").required("required"),
    password : yup.string().required("required"),
  }
);

const initialValueLogin = 
{
  email : "",
  password : "",
}

const LoginPage = () => 
{
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  

  const handleFormSubmit = async (values , onSubitProps) =>
  {
    const savedUserResponse = await fetch(
      'http://localhost:8080/auth/login',
      {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(values)
      }
    );

    const savedUser = await savedUserResponse.json();    

    if(savedUser.success)
    {
      userContext.setAuth(
        {
          ...userContext.auth,
          user:savedUser.user,
          token:savedUser.token
        }
      )

      localStorage.setItem('auth',JSON.stringify(savedUser));
    }

    navigate('/');
    window.location.reload();
    onSubitProps.resetForm();
  }
  
  

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValueLogin}
      validationSchema={loginSchema}
    >
      {
        ({
          values,
          errors,
          touched,
          handleblur,
          handleChange,
          handleSubmit
        }) => 

        (
          <div 
            style=
            {{
              height : '100vh',
              width : '100vw',
              display : 'flex',
              alignItems : 'center',
              justifyContent : 'center'
            }}
          >
            <form onSubmit={handleSubmit}
              style=
              {{
                display : 'flex',
                flexDirection : 'column',
                gap : '2rem',
                textAlign : 'center'
              }}
            >
              
              <h1>Login Page</h1>
  
              <TextField
                label="Email"
                onBlur={handleblur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error = {Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
  
              <TextField
                label="Password"
                type='password'
                onBlur={handleblur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error = {Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
  
  
              {/* Buttons */}
              <Box>
                <Button
                  type='submit'
                >
                  Login
                </Button>
  
                <Typography 
                  onClick = {() => navigate('/register')}
                  sx=
                  {{
                    cursor : 'pointer'
                  }}
                >
                  Don't have an account? Sign Up here.
                </Typography>
                
              </Box>
  
            </form>
          </div>
        )
      }

    </Formik>
  )
}

export default LoginPage