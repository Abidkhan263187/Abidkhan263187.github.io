 import { Avatar, Box, Button, Flex, IconButton, Image, Text, BiLike, BiChat, BiShare, Heading, BsThreeDotsVertical, HStack, Center } from '@chakra-ui/react'
import React from 'react'

import { ProjectCard } from './ProjectCard'

export const Project = () => {
  return (
    <Box className='project-container' id='Projects' >

      <Text fontSize={[ "3xl","4xl","4xl", "4xl"]} mb={"30px"} fontWeight={"700"} textAlign={"center"}>Projects</Text>

      <Box className='project_main'>
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
      </Box>
    </Box>
  )
}
