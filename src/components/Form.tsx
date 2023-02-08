import styled from '@emotion/styled';
import { Box, Button, Grid, TextField,Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
function Form() {
    const navigate = useNavigate()
    const ColorButton = styled(Button)(() => ({
        color: "white",
        width: "100%",
        paddingTop:0,
        paddingBottom:0,
        backgroundColor: "#2d2d2d",
        '&:hover': {
          backgroundColor: "#474747",
        },
        fontFamily:"sans-serif",
        fontWeight: "bolder",
        fontSize: 34
      }));

      const [name,setName] = React.useState<string>("")
      const [phone,setPhone] = React.useState<string>("")
      const [email,setEmail] = React.useState<string>("")

      function handleSubmit(){
        if(name === "" || email === "" || phone === ""){
            alert("Please enter all the details.")
            return
        }
        else if(phone.length < 10){
            alert("Please enter valid phone number.\n(Hint : Length of phone number must be 10 digits)")
            return
        }
        localStorage.setItem("name",name)
        localStorage.setItem("phone",phone)
        localStorage.setItem("email",email)
        navigate("/show-data")
      }
    return (
        <>
            <Grid marginTop={5} container padding={2} borderRadius={2}  boxShadow={2} spacing={2}>
                <Grid item xs={12}>
                <Typography color={"black"} fontFamily={'sans-serif'} fontWeight={"700"} fontSize={32}>
                    Enter your details.
                </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <TextField 
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="outlined-basic" 
                        label="Name" 
                        required
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <TextField 
                        fullWidth
                        value={phone}
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                        id="outlined-basic" 
                        label="Phone No." 
                        required
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        fullWidth
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="outlined-basic" 
                        label="Email address" 
                        required
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                <ColorButton onClick={handleSubmit} variant="contained">
                    PROCEED
                </ColorButton>
                </Grid>
            </Grid>
        </>
    )
}

export default Form