import { Avatar, Box, Button, Flex, IconButton, Image, Text, BiLike, BiChat, BiShare, Heading, BsThreeDotsVertical, HStack, Center } from '@chakra-ui/react'
import React from 'react'

import { ProjectCard } from './ProjectCard'

export const Project = () => {
  return (
    <Box className='project-container' m={"40px 0px"}>

      <Text fontSize={"5xl"} fontWeight={"700"} textAlign={"center"}>Projects</Text>

      <Box className='project-main' padding={"20px 60px"} margin={"auto"} width={"max-content"} border={"1px solid white"} gap={"50px"} display={"grid"} gridTemplateColumns={"1fr 1fr"}>
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
      </Box>
    </Box>
  )
}
