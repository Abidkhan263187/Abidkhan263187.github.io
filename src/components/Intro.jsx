import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { TypedText } from './TypedText';

const handleclick = () => {
    return window.open(
        "https://drive.google.com/file/d/1TdpuWrgC7Yp_Wj06uhY7SqM5324FH2xt/view?usp=sharing",
        "_blank"
    );
};
export const Intro = () => {


    return (
        <Box className='intro_box'  >
            <Box className='intro_left' data-aos="fade-up" data-aos-duration="1000">
                <Box  data-aos="fade-right" data-aos-duration="1000"> <Text fontSize={["20px", "20px", "30px", "2xl"]} fontWeight={"700"}> Hello It's Me</Text></Box>
                <Box data-aos="fade-left" data-aos-duration="1000">   <Text fontSize={["25px", "10px", "40px", "4xl"]} fontWeight={"700"} id="user-detail-name">Abid Khan</Text></Box>
                <Box  data-aos="fade-right" data-aos-duration="1000">   <Text fontSize={["17px", "10px", "20px", "2xl"]} fontWeight={"700"}>And i'm a   <TypedText /> </Text></Box>
                <Box data-aos="fade-up-right">  <Text className='into_myself' mt={"16px"} 
                 id="user-detail-intro">Enthusiastic full stack web developer with a passion for creating dynamic and responsive applications</Text>

                    <Box  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <Text mt={"20px"} letterSpacing={15}>
                            <Link  href='https://github.com/Abidkhan263187' className='soco_icon' color={"#03c8d7"}> <i class="fa-brands fa-github fa-xl"></i></Link>
                            <Link  href='https://www.linkedin.com/in/abid-khan-325795182/' className='soco_icon'color={"#03c8d7"}><i class="fa-brands fa-linkedin fa-xl"></i></Link>
                            <Link href='#' className='soco_icon'color={"#03c8d7"}><i class="fa-brands fa-twitter fa-xl"></i></Link>
                            <Link href='https://www.instagram.com/_abidkhann/'  className='soco_icon'color={"#03c8d7"} ><i class="fa-brands fa-instagram fa-xl"></i></Link>
                        </Text></Box>

                    <Text data-aos="zoom-out-up" data-aos-duration="1000" mt={"30px"} >
                        <Button size={["sm", "sm", "lg", "lg"]} id="resume-button-2" onClick={handleclick}
                        href="./resume\Abid_resume (3).pdf" as={Link}
                        target="_blank" download={true}
                        color={"white"}
                    
                        _hover={{ bg: "gray.900", color: "#03c8d7", borderRadius: "10px" }}
                        bg={"#03c8d7"} >
                        Download Cv</Button></Text>
                        {/* <a href="./resume\Abid_resume (3).pdf" download> resume</a> */}
                        </Box>
            </Box>
            <Box className='intro_right' data-aos="fade-down"  data-aos-duration="1000">
                <img className='home-img' src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg" alt="" />
            </Box>

        </Box>
    )
}
