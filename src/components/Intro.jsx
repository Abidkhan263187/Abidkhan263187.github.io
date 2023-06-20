import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'

const handleclick = () => {
    return window.open(
        "https://drive.google.com/file/d/1TdpuWrgC7Yp_Wj06uhY7SqM5324FH2xt/view?usp=sharing",
        "_blank"
    );
};
export const Intro = () => {

    // const typed=new typed('.role',{
    //     string:['Frontend Developer','Backend Developer','Student At Masai'],
    //     typeSpeed:100,
    //     backSpeed:100,
    //     backDelay:1000,
    //     loop:true,
        
    // })
    
    return (
        <Box className='intro_box' >
            <Box className='intro_left' data-aos="fade-up" data-aos-duration="1000">
                <Box  data-aos="fade-right" data-aos-duration="1000"> <Text fontSize={["20px", "20px", "30px", "2xl"]} fontWeight={"700"}> Hello It's Me</Text></Box>
                <Box data-aos="fade-left" data-aos-duration="1000">   <Text fontSize={["25px", "10px", "40px", "4xl"]} fontWeight={"700"}>Abid Khan</Text></Box>
                <Box  data-aos="fade-right" data-aos-duration="1000">   <Text fontSize={["17px", "10px", "30px", "2xl"]} fontWeight={"700"}>And i'm a <span className='role' style={{ color: "#03c8d7" }}> Full Stack Web Developer</span> </Text></Box>
                <Box data-aos="fade-up-right">  <Text className='into_myself' mt={"16px"} >Enthusiastic full stack web developer with a passion for creating dynamic and responsive applications</Text>

                    <Box  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <Text mt={"20px"} letterSpacing={15}>
                            <Link  className='soco_icon' color={"#03c8d7"}> <i class="fa-brands fa-github fa-xl"></i></Link>
                            <Link className='soco_icon'color={"#03c8d7"}><i class="fa-brands fa-linkedin fa-xl"></i></Link>
                            <Link className='soco_icon'color={"#03c8d7"}><i class="fa-brands fa-twitter fa-xl"></i></Link>
                            <Link className='soco_icon'color={"#03c8d7"} ><i class="fa-brands fa-instagram fa-xl"></i></Link>
                        </Text></Box>

                    <Text data-aos="zoom-out-up" data-aos-duration="1000" mt={"30px"} ><Button size={["sm", "sm", "lg", "lg"]}
                        href="/Abid_khan_resume.pdf" as={Link}
                        target="_blank" download={true}
                        color={"white"}
                        _hover={{ bg: "gray.900", color: "#03c8d7", borderRadius: "10px" }}
                        bg={"#03c8d7"} onClick={handleclick}>
                        Download Cv</Button></Text></Box>
            </Box>
            <Box className='intro_right' data-aos="fade-down"  data-aos-duration="1000">
                <img className='intro_pic' src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg" alt="" />
            </Box>

        </Box>
    )
}
