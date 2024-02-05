import React from 'react'
import { Box ,Typography} from '@mui/material'

function Intro() {
    const boxStyle = {
        boxSizing : "border-box",
        paddingTop : "40px",
        paddingLeft :"25px",
        paddingRight:"25px"
    }
  return (
    <Box sx={boxStyle}>
      <Typography variant='h2' color="#64ffda">About Me !</Typography>
      <p style={{"margin-top":"25px" ,"color":"#ccd6f6"}}>Hi there! I'm Vinay Garg, a third-year student at NIT Kurukshetra. Alongside my academic pursuits, I am passionate about web development, particularly skilled in the MERN (MongoDB, Express.js, React, Node.js) stack. Harnessing this passion, I've successfully initiated and completed projects, showcasing my proficiency in crafting dynamic web applications. This hands-on experience has not only solidified my technical skills but also fueled my enthusiasm for creating innovative solutions.</p>
      <p style={{"margin-top":"25px" ,"color":"#ccd6f6"}}>Currently on the lookout for a web development internship, I am eager to apply my knowledge in a real-world setting. My expertise in the MERN stack reflects my commitment to staying at the forefront of web development trends. <b>I am well-versed in both front-end and back-end technologies, making me a versatile candidate for any web development role.</b>   </p>
      <p style={{"margin-top":"25px" ,"color":"#ccd6f6"}}>As I continue my journey at NIT Kurukshetra, I am excited to further explore the ever-evolving realm of web development, integrating theoretical knowledge with practical application. The collaborative and stimulating environment at NIT Kurukshetra has been instrumental in nurturing my curiosity and drive for continuous improvement. I eagerly look forward to contributing my skills and insights to the field of web development, leveraging the knowledge gained from both academic and hands-on experiences. If you have any further suggestions or adjustments, feel free to let me know!</p>
    </Box>
  )
}

export default Intro
