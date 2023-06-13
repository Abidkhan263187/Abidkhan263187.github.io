import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export const Skills = () => {
  const [skillshow,setSkillShow]=useState(false)
  return (
    <Box className='skill-container' border={"1px solid"}>
      <Text textAlign={"center"} fontSize={"4xl"}> Technical <span style={{ color: "#03c8d7", fontWeight: "700" }}> Skills</span> </Text>
      <Box className='skill-container-inner' display={"flex"} height={"500px"}>
        <Box className='skills-left' width={"50%"}  border={"1px solid"} display={"flex" } flexDirection={"column"} justifyContent={"space-evenly"}>
       
        <Text textAlign={"center"} fontWeight="700"><Button  fontSize={"2xl"}  onClick={()=>setSkillShow((p)=>!p)}  _hover={{ bg: "gray.900",  color: "#03c8d7", borderRadius: "10px" }}  color={"white"} bg={"#20232f"}>Front  <span style={{ color: "#03c8d7" }}>End</span>  </Button> </Text>
       
          {skillshow ?( <Box className='left-dup'  height={"400px"}   border={"1px solid"} padding={"40px"}>
            <img style={{width:"70%" ,margin:"auto"}} src="https://cdn.dribbble.com/users/1124806/screenshots/4871258/ezgif.com-optimize.gif" alt="" />
          </Box>):( <Box className='left-real'  height={"400px"}  padding={"10px 30px"} textAlign={"center"} border={"1px solid"}>
          
          
          
           
           
            <Box className='frontend-skills' display={"grid"} gap={"20px"} gridTemplateColumns={"repeat(3,1fr)"} padding={"10px 20px"}>
              <Box border={"1px solid"}>   <img style={{ width:"45%", display:"block" ,margin:"auto"  }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> <Text fontSize={"2xl"}>HTML</Text></Box>
              <Box border={"1px solid"}>  <img style={{ width:"45%", display:"block" ,margin:"auto"  }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" />  <Text fontSize={"2xl"}>CSS</Text></Box>
              <Box border={"1px solid"}>   <img style={{ width:"45%", display:"block" ,margin:"auto"  }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" /> <Text fontSize={"2xl"}>javascript</Text></Box>
              <Box border={"1px solid"}>  <img style={{ width:"45%", display:"block" ,margin:"auto"  }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> <Text fontSize={"2xl"}>React</Text></Box>
              <Box border={"1px solid"}>  <img style={{ width:"45%", display:"block" ,margin:"auto"  }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" />  <Text fontSize={"2xl"}>Redux</Text></Box>
            

            </Box>
          </Box>)}
         
          
         
        </Box>
        <Box className='skills-right' width={"50%"} border={"1px solid green"} display={"flex" } flexDirection={"column"} justifyContent={"space-evenly"}>
      
        <Text textAlign={"center"}  fontWeight="700"> <Button fontSize={"2xl"}  onClick={()=>setSkillShow((p)=>!p)}  _hover={{ bg: "gray.900", color: "#03c8d7", borderRadius: "10px" }} color={"white"} bg={"#20232f"}>Back <span style={{ color: "#03c8d7" }}> End</span></Button>  </Text>
          
          {skillshow ? ( <Box className='right-real' height={"400px"} padding={"10px 30px"} border={"1px solid"}>
          
           
            <Box className='back-end-skills'  display={"grid"} gap={"20px"} gridTemplateColumns={"repeat(3,1fr)"} padding={"10px 20px"}  textAlign={"center"}>

            
               <Box border={"1px solid"} display={"block"} margin={"auto"}>  <img style={{ width:"50%" ,display:"block" ,margin:"auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"/>  <Text> Node.js </Text></Box>
               <Box border={"1px solid"}><img style={{ width:"50%" ,display:"block" ,margin:"auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express"/> <Text> Express.js </Text></Box>
               <Box border={"1px solid"}> <img style={{ width:"50%" ,display:"block" ,margin:"auto" }} src="https://openautomationsoftware.com/wp-content/uploads/2016/07/JSON-icon-2.jpg"  alt="JSON" /> <Text> JSON </Text></Box>
               <Box border={"1px solid"}> <img style={{ width:"50%" ,display:"block" ,margin:"auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java"/> <Text> Java </Text></Box>
               <Box border={"1px solid"}>  <img style={{ width:"50%" ,display:"block" ,margin:"auto" }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/> <Text> MongoDB </Text></Box>
               
            </Box>
          </Box>):( <Box className='right-dup'  height={"400px"} padding={"40px"} border={"1px solid"}>
            <img style={{width:"70%" ,margin:"auto"}} src="https://cdn.dribbble.com/users/1732368/screenshots/6553872/web_developer.gif" alt="front end" />
          </Box>)}
      
        </Box>
      </Box>
    </Box>
  )
}
