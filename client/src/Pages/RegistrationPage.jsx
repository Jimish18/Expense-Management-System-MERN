import React from 'react'
import * as yup from "yup";
import 
{
  Box,
  Button,
  TextField,
  Typography
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';


const registerSchema = yup.object().shape(
  {
    name : yup.string().required("required"),
    profession : yup.string().required("required"),
    email : yup.string().email("invalid Email").required("required"),
    password : yup.string().required("required")
  }
);


const initialValueRegister = 
{
  name : "",
  profession : "",
  email : "",
  password : ""
}


const RegistrationPage = () => {

  const navigate = useNavigate();

  const handleFormSubmit = async (values , onSubitProps) =>
  {
    

    const savedUserResponse = await fetch(
      '/auth/register',
      {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(values)
      }
    );

    const savedUser = await savedUserResponse.json();

    console.log(savedUser);

    navigate('/login');
    onSubitProps.resetForm();
  }


  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValueRegister}
      validationSchema={registerSchema}
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
              justifyContent : 'center',
              padding:'0 0.5rem'
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
              
              <h1>Register Page</h1>

              <TextField
                label="Name"
                onBlur={handleblur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error = {Boolean(touched.name) && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              <TextField
                label="Profession"
                onBlur={handleblur}
                onChange={handleChange}
                value={values.profession}
                name="profession"
                error = {Boolean(touched.profession) && Boolean(errors.profession)}
                helperText={touched.profession && errors.profession}
              />
  
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
                  Register
                </Button>
  
                <Typography 
                  onClick = {() => navigate('/login')}
                  sx=
                  {{
                    cursor : 'pointer'
                  }}
                >
                  Already have an account? Login here.
                </Typography>
                
              </Box>
  
            </form>
          </div>
        )
      }

    </Formik>
  )
}

export default RegistrationPage