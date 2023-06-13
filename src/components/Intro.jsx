import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'

export const Intro = () => {
    return (
        <Box display={"flex"} padding={"0px 20px"} >
            <Box border={"1px solid"} padding={"60px 100px"} width={"50%"}>
                <Box> <Text fontSize={"2xl"} fontWeight={"700"}> Hello It's Me</Text></Box>
                <Box>   <Text fontSize={"4xl"}  fontWeight={"700"}>Abid Khan</Text></Box>
                <Box>   <Text fontSize={"2xl"}  fontWeight={"700"}>And i'm a <span style={{ color:"#03c8d7"}}>Full Stack Web Developer</span> </Text></Box>
                <Box>  <Text mt={"15px"} >Enthusiastic full stack web developer with a passion for creating dynamic and responsive applications</Text>
                    <Box>
                        <Text mt={"20px"} letterSpacing={15}>
                            <Link color={"#03c8d7"}> <i class="fa-brands fa-github fa-xl"></i></Link>
                            <Link color={"#03c8d7"}><i class="fa-brands fa-linkedin fa-xl"></i></Link>
                            <Link color={"#03c8d7"}><i class="fa-brands fa-twitter fa-xl"></i></Link>
                            <Link color={"#03c8d7"} ><i class="fa-brands fa-instagram fa-xl"></i></Link>
                        </Text></Box>
                    <Text mt={"30px"} ><Button color={"white"} _hover={{ bg: "gray.900", color: "#03c8d7", borderRadius: "10px" }} bg={"#03c8d7"}> Download Cv</Button></Text></Box>
            </Box>
            <Box border={"1px solid"} padding={"20px 0px"} width={"50%"}>
                <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg" style={{ margin: "auto" }} width={"80%"} alt="" />
            </Box>

        </Box>
    )
}
