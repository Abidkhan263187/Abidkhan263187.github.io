import { Box, Button, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export const Skills = () => {
  const [skillshow, setSkillShow] = useState(false)
  return (
    <Box className='skill-container'id='Skills'>
      <Text data-aos="flip-up" data-aos-duration="1000"
        textAlign={"center"} margin={"auto"} w={"max-content"}
       
        color={"#03c8d7"}
        padding={"0px 40px"}
        fontWeight= "700"
        fontSize={["2xl", "2xl", "3xl", "4xl"]}>
          <span style={{ color: "white" ,fontWeight:"400"}}>
          Technical </span>
          Skills </Text>

      <Text data-aos="flip-down" data-aos-duration="1500" textAlign={"center"} w={"max-content"} m={" 20px auto"} fontWeight="700">
        <Button fontSize={["xs", "sm", "2xl", "2xl"]} mb={"10px"} textAlign={"center"} onClick={() => setSkillShow((p) => !p)}
          _hover={{ bg: "gray.900", color: "#03c8d7", borderRadius: "10px" }}
          color={"white"}
          bg={"#03c8d7"}>{skillshow ? "See Front" : " See Back"}
          End
        </Button>
      </Text>

      <Box className='skill-container-inner'  >
        <Box className='skills_left'>
          {skillshow ? (<Box className='left_dup' data-aos="fade-left" data-aos-duration="1000">
            <img src="https://cdn.dribbble.com/users/1124806/screenshots/4871258/ezgif.com-optimize.gif" alt="" />
          </Box>) : (<Box className='left_real'>

            <Text className='skillNameTitle' data-aos="fade-right" data-aos-duration="1000" margin={"auto"} mb={"20px"} border={"1px solid"}>Front End </Text>
            <Box id='frontend_skills' data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" >
              <Box >   <img className='fontSkill_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> <Text className='skillName' >HTML</Text></Box>
              <Box >  <img className='fontSkill_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" />  <Text className='skillName' >CSS</Text></Box>
              <Box >   <img className='fontSkill_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />  <Text className='skillName' >javascript</Text></Box>
              <Box >  <img className='fontSkill_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> <Text className='skillName' >React</Text></Box>
              <Box >  <img className='fontSkill_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" />  <Text className='skillName'>Redux</Text></Box>
              <Box >  <img className='fontSkill_img' src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4" alt="chakra ui" />  <Text className='skillName'>Chakra UI</Text></Box>
            </Box>
          </Box>)}



        </Box>

        <Box className='skills_right'>
          {skillshow ? (<Box className='right_real'>

            <Text className='skillNameTitle' mb={"20px"} data-aos="fade-right" data-aos-duration="1000" border={"1px solid"}>Back End </Text>
            <Box className='back_end_skills' data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" >
              <Box> <img className='backEnd_img' src="https://openautomationsoftware.com/wp-content/uploads/2016/07/JSON-icon-2.jpg" alt="JSON" /> <Text className='skillName'> JSON </Text></Box>
              <Box id="java"> <img className='backEnd_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" /> <Text className='skillName'> Java </Text></Box>
              <Box>  <img className='backEnd_img' src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png" alt="nodejs" />  <Text className='skillName'> Node.js </Text></Box>
              <Box><img className='backEnd_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81s2BetKvsvix5szaKt2gQyX12huNnD7TdA&usqp=CAU" alt="express" /> <Text className='skillName'> Express.js </Text></Box>
              <Box>  <img className='backEnd_img' src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="mongodb" /> <Text className='skillName'> MongoDB </Text></Box>
             < Box>  <img className='backEnd_img' src="https://ih1.redbubble.net/image.3481290663.8913/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="nodejs" />  <Text className='skillName'> mongoose </Text></Box>
             
            </Box>
          </Box>) : (<Box className='right_dup' data-aos="fade-down">
            <img src="https://cdn.dribbble.com/users/1732368/screenshots/6553872/web_developer.gif" alt="front end" />
          </Box>)}

        </Box>
      </Box>
    
      <Box id='OtherSkills_container' mt={"10px"}>
        <Text data-aos="zoom-out-right" className='tool' data-aos-duration="1000" textAlign={"center"} fontSize={"4xl"} m={"auto"} border={"1px solid"} w={"max-content"} color={"#03c8d7"} fontWeight={"700"}>Tools</Text>
        <Box className='OtherSkills-inner' >


          <Box data-aos="flip-left" data-aos-duration="1500"><img className='tool_skill_img' src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" /> <Text className='skillName'>Git</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='tool_skill_img' src="https://img.icons8.com/?size=1x&id=LoL4bFzqmAa0&format=png" alt="" /> <Text className='skillName'>Github</Text> </Box>
          <Box data-aos="flip-left" data-aos-duration="1500"><img className='tool_skill_img' src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8" alt="" /> <Text className='skillName'>Postman</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='tool_skill_img' src="https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png" alt="" /> <Text className='skillName'>Netlify</Text> </Box>
          <Box data-aos="flip-left" data-aos-duration="1500"><img className='tool_skill_img2' src="https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg" alt="" /> <Text className='skillName'>Vercel</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='tool_skill_img2' src="https://cdn.wmaraci.com/nedir/json.png" alt="" /> <Text className='skillName'>JSON</Text> </Box>
          <Box data-aos="flip-left" data-aos-duration="1500"><img className='tool_skill_img' src="https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j_400x400.png" alt="" /> <Text className='skillName'>Heroku</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='tool_skill_img' src="https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg" alt="" /> <Text className='skillName'>NPM</Text> </Box>
        </Box>

      </Box>
    </Box>
  )
}
