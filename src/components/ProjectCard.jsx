import React from 'react'
import { Box, Button, Flex,Image, Text, Heading } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export const ProjectCard = () => {
  return (
    <Card  maxW='md' border={"1px solid white"} padding={"5px"} bg={"aqua"} color={"white"} m={"30px 0px 60px 0px"}>
          <CardHeader>

            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' >
                <Box>  <Image
            objectFit='cover'
            src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Chakra UI'
          /></Box>
              </Flex>
            </Flex>

          </CardHeader>

          <CardBody>
            <Text mb={"20px"} mt={"10px"}> <Heading as='h3' fontSize='2xl' fontWeight='bold'>  Project Name </Heading> </Text>
            <Text mt={"10px"}>
              With Chakra UI, I wanted to sync the speed of development with the speed
              of design. 
            </Text>
            <Text mt={"10px"}>
                <span  style={{ color: "#03c8d7", fontWeight: "700" }}>TECH STACK :</span> React | Redux | CSS | HTML | JavaScript | JSON
            </Text>
          </CardBody>

        

          <CardFooter justify='space-between' flexWrap='wrap' sx={{ '& > button': { minW: '136px', }, }} >
            <Flex justifyContent={"space-evenly"} w={"100%"} border={"1px solid"}>
              <Button bg="#03c8d7" > <i class="fa-brands fa-github fa-2xl"></i></Button>
              <Button  bg="#03c8d7" > <i class="fa-solid fa-eye fa-2xl"></i></Button>
            </Flex>
          </CardFooter>

        </Card>
  )
}
