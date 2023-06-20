import { Box, Button, Divider, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export const AboutMe = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowMoreDetails((prevState) => !prevState);
  }
  return (
    <Box className='about_main'  id="About" >

      <Box className='about_left' >
        <img  src='https://matlensilver.com/wp-content/uploads/2021/07/IT-Staffing.gif' />
      </Box>
      <Box className='about_right' >
        <Box> <Text fontSize={["25px", "25px", "40px", "3xl"]} fontWeight={"700"} >About me</Text> </Box>
        <Box> <Text fontSize={["20px", "20px", "30px", "2xl"]} fontWeight={"700"}> <span style={{ color: "#03c8d7" }}> Full Stack </span>Web Developer </Text></Box>
        <Box className='about_me'> <Text m={"20px 0px"}>I am a passionate web developer driven by a relentless
          pursuit of excellence. With a meticulous attention to detail and
          a commitment to delivering pixel-perfect designs, I create immersive
          and engaging web experiences that leave a lasting impression</Text></Box>
        <Box><Button  size={["sm", "md", "lg", "lg"]} color={"white"} _hover={{ bg: "gray.900", color: "#03c8d7", borderRadius: "10px" }} bg={"#03c8d7"} onClick={handleReadMoreClick}>{showMoreDetails ? "Read less" : "Read more"}</Button></Box>
        {showMoreDetails && <Box className='more-detail' mt={"30px"} >
       
          <Box>

            <Text mt={"10px"}> <span style={{ color: "#03c8d7", fontWeight: "700" }}> <i class="fa-solid fa-graduation-cap fa-xl"></i></span>  : Bachelor's Degree in CSE from Mdu University (rohtak) HARYANA</Text>
            <Divider />
            <Text  mt={"10px"}><span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-phone fa-lg"></i> </span> : 6280007521</Text>
            <Divider />
            <Text mt={"10px"}><span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-envelope fa-lg"></i></span>  : abidkhan263187@gmail.com</Text>
            <Divider />
            <Text mt={"10px"}> <span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-location-dot fa-xl"></i></span>  Amritsar,Punjab</Text>
            <Divider />
          </Box>
        </Box>}

      </Box>
    </Box>
  )
}
