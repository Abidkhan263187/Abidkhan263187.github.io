import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export const Skills = () => {
  const [skillshow, setSkillShow] = useState(false)
  return (
    <Box className='skill-container' border={"1px solid"}>
      <Text textAlign={"center"} fontSize={"4xl"}> Technical <span style={{ color: "#03c8d7", fontWeight: "700" }}> Skills</span> </Text>
      <Text textAlign={"center"} mb={"30px"} mt={"10px"} fontWeight="700"><Button fontSize={"2xl"} onClick={() => setSkillShow((p) => !p)} _hover={{ bg: "gray.900", color: "#03c8d7", borderRadius: "10px" }} color={"white"} bg={"#03c8d7"}>{skillshow ? "See Front" : " See Back"}  End  </Button> </Text>

      <Box className='skill-container-inner' display={"flex"} height={"500px"} >

        <Box className='skills-left' width={"50%"} border={"1px solid"}>



          {skillshow ? (<Box className='left-dup' height={"400px"} border={"1px solid"} padding={"40px"}>
            <img style={{ width: "70%", margin: "auto" }} src="https://cdn.dribbble.com/users/1124806/screenshots/4871258/ezgif.com-optimize.gif" alt="" />
          </Box>) : (<Box className='left-real' height={"400px"} padding={"10px 30px"} textAlign={"center"} border={"1px solid"}>

            <Text className='skillNameTitle' mb={"20px"}>Front End </Text>



            <Box className='frontend-skills' display={"grid"} gap={"20px"} gridTemplateColumns={"repeat(3,1fr)"} padding={"10px 20px"}>
              <Box border={"1px solid"}>   <img style={{ width: "45%", display: "block", margin: "auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> <Text className='skillName' >HTML</Text></Box>
              <Box border={"1px solid"}>  <img style={{ width: "45%", display: "block", margin: "auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" />  <Text className='skillName' >CSS</Text></Box>
              <Box border={"1px solid"}>   <img style={{ width: "45%", display: "block", margin: "auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />  <Text className='skillName' >javascript</Text></Box>
              <Box border={"1px solid"}>  <img style={{ width: "45%", display: "block", margin: "auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> <Text className='skillName' >React</Text></Box>
              <Box border={"1px solid"}>  <img style={{ width: "45%", display: "block", margin: "auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" />  <Text className='skillName'>Redux</Text></Box>


            </Box>
          </Box>)}



        </Box>
        <Box className='skills-right' width={"50%"} border={"1px solid green"}>



          {skillshow ? (<Box className='right-real' height={"400px"} padding={"10px 30px"} border={"1px solid"} textAlign={"center"}>

            <Text className='skillNameTitle' mb={"20px"}>Back End </Text>

            <Box className='back-end-skills' display={"grid"} gap={"20px"} gridTemplateColumns={"repeat(3,1fr)"} padding={"10px 20px"} textAlign={"center"}>


              <Box border={"1px solid"} display={"block"} margin={"auto"}>  <img style={{ width: "50%", display: "block", margin: "auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" />  <Text className='skillName'> Node.js </Text></Box>
              <Box border={"1px solid"}><img style={{ width: "50%", display: "block", margin: "auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" /> <Text className='skillName'> Express.js </Text></Box>
              <Box border={"1px solid"}> <img style={{ width: "50%", display: "block", margin: "auto" }} src="https://openautomationsoftware.com/wp-content/uploads/2016/07/JSON-icon-2.jpg" alt="JSON" /> <Text className='skillName'> JSON </Text></Box>
              <Box border={"1px solid"}> <img style={{ width: "50%", display: "block", margin: "auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" /> <Text className='skillName'> Java </Text></Box>
              <Box border={"1px solid"}>  <img style={{ width: "50%", display: "block", margin: "auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" /> <Text className='skillName'> MongoDB </Text></Box>

            </Box>
          </Box>) : (<Box className='right-dup' height={"400px"} padding={"40px"} border={"1px solid"}>
            <img style={{ width: "70%", margin: "auto" }} src="https://cdn.dribbble.com/users/1732368/screenshots/6553872/web_developer.gif" alt="front end" />
          </Box>)}

        </Box>
      </Box>
      <Box className='OtherSkills-container'>
           <Text  textAlign={"center"} fontSize={"4xl" } fontWeight={"700"}>Tools</Text>
           <Box className='OtherSkills-inner'  border={"2px solid"}  display={"grid"} gap={"20px"} gridTemplateColumns={"repeat(4,1fr)"} padding={"40px 80px"} textAlign={"center"} >

      
        <Box border={"1px solid"}><img style={{ width: "30%", display: "block", margin: "auto" }} src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" /> <Text  className='skillName'>Git</Text> </Box>
        <Box border={"1px solid"}><img style={{ width: "30%", display: "block", margin: "auto" }} src="https://img.icons8.com/?size=1x&id=LoL4bFzqmAa0&format=png" alt="" /> <Text  className='skillName'>Github</Text> </Box>
        <Box border={"1px solid"}><img style={{ width: "30%", display: "block", margin: "auto" }} src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8" alt="" /> <Text  className='skillName'>Postman</Text> </Box>
        <Box border={"1px solid"}><img style={{ width: "30%", display: "block", margin: "auto" }} src="https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png" alt="" /> <Text  className='skillName'>Netlify</Text> </Box>
        <Box border={"1px solid"}><img style={{ width: "55%", display: "block", margin: "auto" }} src="https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg" alt="" /> <Text  className='skillName'>Vercel</Text> </Box>
        <Box border={"1px solid"}><img style={{ width: "60%", display: "block", margin: "auto" }} src="https://cdn.wmaraci.com/nedir/json.png" alt="" /> <Text  className='skillName'>JSON</Text> </Box>
        <Box border={"1px solid"}><img style={{ width: "30%", display: "block", margin: "auto" }} src="https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j_400x400.png" alt="" /> <Text  className='skillName'>Heroku</Text> </Box>
        <Box border={"1px solid"}><img style={{ width: "30%", display: "block", margin: "auto" }} src="https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg" alt="" /> <Text  className='skillName'>NPM</Text> </Box>
        </Box>
    
      </Box>
    </Box>
  )
}
