import React,{useState,useEffect} from "react";
import { Box } from "@mui/material"
import Loader from '../UIElements/Loader.js'
import { workBox, imgBox, workStyle } from "./work_style";

import ImageRender from "../Component/ImageRender";
export default function Work() {
  const [Images,setImages] = useState([]);
  const [loading,setLoading] = useState(true);

 useEffect(() => {
    // Fetch data from backend API
    fetch(process.env.REACT_APP_BACKEND_URL +  '/work')
      .then((response) => response.json())
      .then((data) => {
        setImages(data.works);
      })
      .catch((error) => console.error('Error fetching data:', error)
      ).finally(()=>{
        setLoading(false);
      })
  }, []); 

  

  return (
    <Box sx={workStyle}>
      <Box sx={workBox}>
        <Box sx={imgBox}>
          {loading ? <Loader/> :<ImageRender images={Images}/>}
        </Box>
      
      </Box>
    </Box>
  );
}
