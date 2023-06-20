import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export const Skills = () => {
  const [skillshow, setSkillShow] = useState(false)
  return (
    <Box className='skill-container' border={"1px solid"} id='Skills'>
      <Text textAlign={"center"} margin={"auto"} fontSize={["2xl","2xl","3xl","4xl"]}> Technical <span style={{ color: "#03c8d7", fontWeight: "700" }}> Skills</span> </Text>

      <Text textAlign={"center"} mb={"30px"} mt={"10px"} fontWeight="700">
        <Button fontSize={[ "xs","sm","2xl","2xl"]} textAlign={"center"} onClick={() => setSkillShow((p) => !p)}
          _hover={{ bg: "gray.900", color: "#03c8d7", borderRadius: "10px" }}
          color={"white"}
          bg={"#03c8d7"}>{skillshow ? "See Front" : " See Back"}
          End
        </Button>
      </Text>

      <Box className='skill-container-inner'  >
        <Box className='skills_left'>
          {skillshow ? (<Box className='left_dup'>
            <img src="https://cdn.dribbble.com/users/1124806/screenshots/4871258/ezgif.com-optimize.gif" alt="" />
          </Box>) : (<Box className='left_real'>

            <Text className='skillNameTitle' margin={"auto"}  mb={"20px"}>Front End </Text>
            <Box id='frontend_skills' >
              <Box >   <img className='fontSkill_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> <Text  className='skillName' >HTML</Text></Box>
              <Box >  <img className='fontSkill_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" />  <Text className='skillName' >CSS</Text></Box>
              <Box >   <img className='fontSkill_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />  <Text className='skillName' >javascript</Text></Box>
              <Box >  <img className='fontSkill_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> <Text className='skillName' >React</Text></Box>
              <Box >  <img className='fontSkill_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" />  <Text className='skillName'>Redux</Text></Box>
            </Box>
          </Box>)}



        </Box>

        <Box className='skills_right'>
          {skillshow ? (<Box className='right_real'>

            <Text className='skillNameTitle' mb={"20px"}>Back End </Text>
            <Box className='back_end_skills' >
              <Box border={"1px solid"} display={"block"} margin={"auto"}>  <img className='backEnd_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" />  <Text className='skillName'> Node.js </Text></Box>
              <Box border={"1px solid"}><img className='backEnd_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" /> <Text className='skillName'> Express.js </Text></Box>
              <Box border={"1px solid"}> <img className='backEnd_img' src="https://openautomationsoftware.com/wp-content/uploads/2016/07/JSON-icon-2.jpg" alt="JSON" /> <Text className='skillName'> JSON </Text></Box>
              <Box  id="java" border={"1px solid"}> <img className='backEnd_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" /> <Text className='skillName'> Java </Text></Box>
              <Box border={"1px solid"}>  <img   className='backEnd_img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" /> <Text className='skillName'> MongoDB </Text></Box>

            </Box>
          </Box>) : (<Box className='right_dup'>
            <img src="https://cdn.dribbble.com/users/1732368/screenshots/6553872/web_developer.gif" alt="front end" />
          </Box>)}

        </Box>
      </Box>
      <Box id='OtherSkills_container'>
        <Text textAlign={"center"} fontSize={"4xl"} fontWeight={"700"}>Tools</Text>
        <Box className='OtherSkills-inner' >


          <Box border={"1px solid"}><img className='tool_skill_img' src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" /> <Text className='skillName'>Git</Text> </Box>
          <Box border={"1px solid"}><img className='tool_skill_img' src="https://img.icons8.com/?size=1x&id=LoL4bFzqmAa0&format=png" alt="" /> <Text className='skillName'>Github</Text> </Box>
          <Box border={"1px solid"}><img className='tool_skill_img' src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8" alt="" /> <Text className='skillName'>Postman</Text> </Box>
          <Box border={"1px solid"}><img className='tool_skill_img' src="https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png" alt="" /> <Text className='skillName'>Netlify</Text> </Box>
          <Box border={"1px solid"}><img  className='tool_skill_img2' src="https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg" alt="" /> <Text className='skillName'>Vercel</Text> </Box>
          <Box border={"1px solid"}><img  className='tool_skill_img2'src="https://cdn.wmaraci.com/nedir/json.png" alt="" /> <Text className='skillName'>JSON</Text> </Box>
          <Box border={"1px solid"}><img className='tool_skill_img' src="https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j_400x400.png" alt="" /> <Text className='skillName'>Heroku</Text> </Box>
          <Box border={"1px solid"}><img className='tool_skill_img' src="https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg" alt="" /> <Text className='skillName'>NPM</Text> </Box>
        </Box>

      </Box>
    </Box>
  )
}
