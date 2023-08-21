import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { TypedText } from './TypedText';
import abid from '../components/images/abid.jpg'
import resume from './resume/Abid-Khan-Resume.pdf'
const handleclick = (resume) => {
   const file=resume.split("/").pop();
   const tag=document.createElement("a");
   tag.href=resume;
   tag.setAttribute("download",file);
   tag.click();
   tag.remove();
};
export const Intro = () => {


    return (
        <Box className='intro_box'  >
            <Box className='intro_left' data-aos="fade-up" data-aos-duration="1000">
                <Box  data-aos="fade-right" data-aos-duration="1000"> <Text fontSize={["18px", "20px", "22px", "2xl"]} fontWeight={"700"}> Hello It's Me</Text></Box>
                <Box data-aos="fade-left" data-aos-duration="1000">   <Text fontSize={["23px", "20px", "25px", "4xl"]} fontWeight={"700"} id="user-detail-name">Abid Khan</Text></Box>
                <Box  data-aos="fade-right" data-aos-duration="1000">   <Text fontSize={["17px", "13px", "17px", "2xl"]} fontWeight={"700"}>And i'm a   <TypedText /> </Text></Box>
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
                        <Button size={["sm", "md", "md", "md"]} id="resume-button-2" onClick={()=>handleclick(resume)}
                        href="https://drive.google.com/file/d/1521iQqATtifgol-pjiwWE_LP9Bw0OoY4/view?usp=drive_link" as={Link}
                        target="_blank" download={true}
                        color={"white"}
                    
                        _hover={{ bg: "gray.900", color: "#03c8d7", borderRadius: "10px" }}
                        bg={"#03c8d7"} >
                       Download Resume</Button></Text>
                        {/* <a href="./resume\Abid_resume (3).pdf" download> resume</a> */}
                        </Box>
            </Box>
            <Box className='intro_right' data-aos="fade-down"  data-aos-duration="1000">
                <img className='home-img' src={abid} alt="" />
            </Box>

        </Box>
    )
}
