import React from 'react'
import { Box} from '@mui/material'
import { aboutBox,aboutStyle } from './about_style'
import Intro from '../Component/Intro'

export default function About() {
  return (
    <Box sx={aboutStyle}>
      <Box sx={aboutBox}>
      <Intro/>
      </Box>
    </Box>
  )
}
