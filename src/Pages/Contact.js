import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { contactBox,contactStyle } from "./contact_style";

export default function Contact() {
  const inputStyle = { width: "350px", height: "40px", outline: "none",borderRadius:"5px"};
  const [formData,setFormData] = useState({
    name:"",email:"",query:""
  })
  let name,value;
  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setFormData({...formData, [name]:value});

  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const {name,email,query} = formData;

    const res = await fetch(process.env.REACT_APP_BACKEND_URL +  "/contact",{
      method : "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,query
      })
    });

    const data = await res.json();
    if(data.status=== 201||data){
      window.alert("submited");
    }

    setFormData({
      name: "",
      email: "",
      query: "",
    });
   
  };
  return (
    <Box id="contact" sx={contactStyle}>
      <Box sx={contactBox}>
        <Typography variant="h3" color="#64ffda">
          Get In Touch
        </Typography>
        <Box sx={{ marginTop: "5%" }}>
          <form onSubmit={handleSubmit}>
            <Box>
              <input
                type="text"
                value={formData.name}
                name = "name"
                onChange={inputHandler}
                style={inputStyle}
                placeholder="Name"
              />
            </Box>
            <Box sx={{ marginTop: "23px" }}>
              <input
                value={formData.email}
                onChange={inputHandler}
                name = "email"
                type="email"
                style={inputStyle}
                placeholder="E-mail"
              />
            </Box>
            <Box sx={{ marginTop: "23px" }}>
              <textarea
                value={formData.query}
                onChange={inputHandler}
                name="query"
                placeholder="query..."
                style={{
                  width: "350px",
                  height: "100px",
                  outline: "none",
                  border: "none",
                  resize: "none",
                  borderRadius:"5px"
                }}
              ></textarea>
            </Box>
            <Box style={{ marginTop: "27px" }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
