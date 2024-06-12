import { Box, Button, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export const Skills = () => {
  const [skillshow, setSkillShow] = useState(false)
  return (
    <Box  id="skills" >
      <Text data-aos="flip-up" data-aos-duration="1000"
        textAlign={"center"} margin={"auto"} w={"max-content"}
       border={"1px solid"}
        color={"#03c8d7"}
        padding={"0px 60px"}
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

      <Box id='skill-container-inner'  className="skills-card"  >

        <Box id='skills_left'  className="skills-card-name"  >
          {skillshow ? (<Box className='left_dup' data-aos="fade-left" data-aos-duration="1000">
            <img className="skills-card-img" src="https://phpdots.com/wp-content/uploads/2021/12/api-backend-banner.svg" alt="" />
          </Box>) : (<Box id='left_real'  >

            <Text className='skillNameTitle' data-aos-duration="1000" margin={"auto"} mb={"20px"} border={"1px solid"}>Front End </Text>
            <Box id='frontend_skills' data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" >
              <Box >   <img   className="skills-card-img" id='fontSkill_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="html5" /> <Text   className="skills-card-name"    id='skillName'  >HTML</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://img.freepik.com/free-icon/css_318-698167.jpg" alt="css3" />  <Text   className="skills-card-name"    id='skillName' >CSS</Text></Box>
              <Box >   <img  className="skills-card-img" id='fontSkill_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="javascript" />  <Text   className="skills-card-name"    id='skillName' >javascript</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQ6ZmsiCzSC16bStr1KjZNcIBW5hAMa1ek6xoNeSSw5wQouq_N7dQCxlxI02TIeZk1e0&usqp=CAU" alt="react" /> <Text   className="skills-card-name"    id='skillName' >React</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="redux" />  <Text      id='skillName'>Redux</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4" alt="chakra ui" />  <Text    className="skills-card-name"   id='skillName'>Chakra UI</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="Bootstrap" />  <Text    className="skills-card-name"   id='skillName'>Bootstrap</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png " alt="Bootstrap" />  <Text    className="skills-card-name"   id='skillName'>Material UI</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://images.ctfassets.net/23aumh6u8s0i/3jY4eCzPqbJ8bP7RX8SnTe/d6252025eff38698a5ed4ffdbd02f580/nextjs_hero" alt="next.js" />  <Text    className="skills-card-name"   id='skillName'>Next.js</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png?f=webp" alt="Typescript" />  <Text    className="skills-card-name"   id='skillName'>Typescript</Text></Box>
           
            </Box>
          </Box>)}



        </Box>

        <Box id='skills_right'  className="skills-card-name" >
          {skillshow ? (<Box id='right_real'  >

            <Text className='skillNameTitle' mb={"20px"}  border={"1px solid"}>Back End </Text>
            <Box className='back_end_skills' data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" >
              <Box> <img className='skills-card-img' id='backEnd_img' src="https://openautomationsoftware.com/wp-content/uploads/2016/07/JSON-icon-2.jpg" alt="JSON" /> <Text    className="skills-card-name"   id='skillName'> JSON </Text></Box>
              <Box > <img className='skills-card-img' id='backEnd_img' src="https://cdn-icons-png.flaticon.com/512/1183/1183669.png" alt="java" /> <Text    className="skills-card-name"   id='skillName'> Java </Text></Box>
              <Box>  <img className='skills-card-img' id='backEnd_img' src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png" alt="nodejs" />  <Text    className="skills-card-name"   id='skillName'> Node.js </Text></Box>
              <Box><img className='skills-card-img' id='backEnd_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81s2BetKvsvix5szaKt2gQyX12huNnD7TdA&usqp=CAU" alt="express" /> <Text    className="skills-card-name"   id='skillName'> Express.js </Text></Box>
              <Box>  <img className='skills-card-img' id='backEnd_img' src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="mongodb" /> <Text    className="skills-card-name"   id='skillName'> MongoDB </Text></Box>
             < Box>  <img className='skills-card-img' id='backEnd_img' src="https://ih1.redbubble.net/image.3481290663.8913/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="nodejs" />  <Text    className="skills-card-name"   id='skillName'> mongoose </Text></Box>
             < Box>  <img className='skills-card-img' id='backEnd_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyOljas7yKnra9JqB9I4HdeSWIxPLSz_sDg&s" alt="passport" />  <Text    className="skills-card-name"   id='skillName'> Passport.js </Text></Box>
             < Box>  <img className='skills-card-img' id='backEnd_img' src="https://play-lh.googleusercontent.com/3C-hB-KWoyWzZjUnRsXUPu-bqB3HUHARMLjUe9OmPoHa6dQdtJNW30VrvwQ1m7Pln3A" alt="jwt" />  <Text    className="skills-card-name"   id='skillName'> JWT </Text></Box>
             
            </Box>
          </Box>) : (<Box className='right_dup' data-aos="fade-down">
            <img  className='skills-card-img' src="https://cdn1.vectorstock.com/i/1000x1000/52/60/programming-website-frontend-developepr-working-vector-24575260.jpg" alt="front end" />
          </Box>)}

        </Box>
      </Box>
    
      <Box id='OtherSkills_container' class="skills-card" mt={"10px"}>
        <Text  className='tool' data-aos-duration="1000" textAlign={"center"}  m={"5% auto"} border={"1px solid"} w={"max-content"} color={"#03c8d7"} fontWeight={"700"}>Tools</Text>
        <Box className='OtherSkills-inner' >


          <Box data-aos="flip-left" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>Git</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://img.icons8.com/?size=1x&id=LoL4bFzqmAa0&format=png" alt="" /> <Text   className="skills-card-name"    id='skillName'>Github</Text> </Box>
          <Box data-aos="flip-left" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8" alt="" /> <Text   className="skills-card-name"    id='skillName'>Postman</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>Netlify</Text> </Box>
          <Box data-aos="flip-left" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img2' src="https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg" alt="" /> <Text   className="skills-card-name"    id='skillName'>Vercel</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img2' src="https://cdn.wmaraci.com/nedir/json.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>JSON</Text> </Box>
          <Box data-aos="flip-left" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://w7.pngwing.com/pngs/784/183/png-transparent-shopify-logo-e-commerce-business-super-sale-angle-text-service-thumbnail.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>Shopify</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg" alt="" /> <Text   className="skills-card-name"    id='skillName'>NPM</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///9G47c84rQt4bGY7dKQ7NCi79ju/fg44rPC9OT3/vz6/v3p/PaI681Q5Lp76cjO9+rZ+O596smr8Nq48+BY5b3G9ecg4K4D36vT9+zj+vNo58K99OKb7tXD9OWv8d1v6MNEnehfAAADXklEQVR4nO3d23aiMBhA4RpPUesBFa0HRt//KTu9mbVif1RyDrO/a0qzJ4INOvDxAQAAAAAAAAAAAORnWm2ut93kXU1l/PRM3GhhbNNIu/kTo21+2m1r/ZfqYHg19rGUflibhUdpk2XwvGpy+UkbdKVnZqG0B2UWDqVNxmHzzs1Kd48rp3B2sc0ro3C/0tZ5JRReB0592Reease+zAvnW+l39ajwYPHeUFTh2MME5lw4rX1MYMaFlae+bAsPzqfQzAuvfg7BfAtvHgOzLPQ5g1kWHrwGZlhY+TvJ5Fk49fY2kWth7Tkwu8LxO1OolH7f0bxOsz0OBWbhl7DF0dN1mtdnGaXVZXzbVOfPd839DM2P+asZ1Hq5yWrEXW2fFip9P6QeoaPT09eoXp9TD9DZ6tkE1tXrHeTu9uS9XjepR+dD+0Go1Cn14Hxon0JVF33+/Kf1KFSXxeufLkDrsl5dUg/Nk3vLYahW/ZjBj8/WKZymHponk5Yp1L04i/5oWTXpSeqB+XJueZHWKQajVr8NRo473ckvUp3kT7UgK+CLfJZZexlxVyEKFy1TmGY1EaLwJB6GiaYwSKF8GOqNnxF3FaJQXtwrPwPuLESh+G6oXE/QtkIUiodhsj9nAhRO5RNNqlVhgEL5s4pkq6YAheLaMNlhGKJwL36YsPc04M4CFIpvh+nWTdEKk10ADlAoLn91ssU9hRYojIxCC7kVSv8boVeF97Vg57TLzAoDoLB8FJaPwvJRWD4Ky0dh+TIrPGwEbtfFMis8Cl+mHrp9Czqzwv9gjU9hdxRGRqEFCiOj0AKFkVFogcLIKLRAYWQUWqAwsv5fp7nOBG7fssusMAAKy0dh+SgsH4Xlo7B8FJYvs8LtUnBz2mVmheJd53u1Au7/Gp9CCxRGRqEFCiOj0AKFkVFogcLIKLRAYWQUWhALh70qlB7Zl64wwHWaxVziabzdiaPpyX1iAQAAgF5rpAdpfZnbaOlZW+ZNXDfSbvJ4Zpe8Aja3ER9hcjc2Ee8Knsdz1yikkEIKKaSQQgoppJBCCimkkMJ+FDbSp9xHc5uB9NHzQ6F0u/jhQ6H0qx4KxU+53a7THMaj3x7+0Rphk5F5K/izuBvzAYN7aTcjs1Dazci8oAUAAAAAAAAAAAAE8w39zlW3oYFBQgAAAABJRU5ErkJggg==" alt="" /> <Text   className="skills-card-name"    id='skillName'>Render</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVwOzVey6XcMevohRDman3xgDFw91v8qZfw&s" alt="zapier" /> <Text   className="skills-card-name"    id='skillName'>Zapier</Text> </Box>
          
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYtI_MIrVq4WfN7M.qN7gV3ayNiQeJK6Uxg366DH3bnRmVWMFBWWyXonVyp6x0RYE1elb_jkQQQH7FwsNBBqQO4iFrOIwXtaGkMjmrISfBfgMsCEGwIBPArmzCSVWYx1zA--&format=source" alt="vs code" /> <Text   className="skills-card-name"    id='skillName'>Vs Code</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://www.kenwalger.com/twitter_cards/mongodb-atlas.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>MongoDB Atlas</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://avatars.githubusercontent.com/u/77067997?s=280&v=4" alt="" /> <Text   className="skills-card-name"    id='skillName'>Cyclic</Text> </Box>
        </Box>

      </Box>
    </Box>
  )
}
