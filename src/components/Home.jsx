import React from 'react'
import { AboutMe } from './AboutMe'
import { Skills } from './Skills'
import { Project } from './Project'
import { Contacts } from './Contacts'
import { Box, Divider } from '@chakra-ui/react'
import { Intro } from './Intro'

import "./Home.css"

import { Stats } from './Stats'






export const Home = () => {
    return (
        <Box id="Home">
           
            <Intro/>
            <Divider/>
          <AboutMe />
          <Divider/>
          <Skills />
          <Divider/>
          <Project /> 
          <Divider/>
           <Stats/> 
       
           { /*  <Contacts /> */}
        </Box>
    )
}
