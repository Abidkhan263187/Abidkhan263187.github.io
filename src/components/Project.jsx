import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import fur from './images/funiture_project.png'
import flip from './images/flipkart.png'
import boat from './images/boat.png'

import { ProjectCard } from './ProjectCard'

export const Project = () => {
  return (
    <Box className='project-container' id='Projects' >

      <Text data-aos="fade-right" data-aos-duration="1000"
        fontSize={["3xl", "4xl", "4xl", "4xl"]} mb={"30px"}
        color={"#03c8d7"} fontWeight={"700"}
        textAlign={"center"} border={"1px solid"} w={'max-content'} margin={"40px auto"} padding={"0px 40px"}>Projects</Text>

      <Box className='project_main'>
        <ProjectCard tech=" React | Redux | CSS | HTML | JavaScript | JSON | Vercel | Charkra UI" github="https://github.com/Abidkhan263187/Project-Furnitore-store" link="https://furniture-store-mu.vercel.app/" avatar={fur} name="Furniture Store" desc="Furniture Store: Your One-Stop Shop for Stylish Home Furnishings. Create your dream living space with our versatile products." />
        <ProjectCard tech="  CSS | HTML | JavaScript | JSON | Vercel" github="https://github.com/Abidkhan263187/Project-FlipKart-Website-Clone" link="https://flipkartclone-black.vercel.app/index.html" avatar={flip} name="Flipkart" desc="Flipkart: India's Leading Online Shopping Destination. Shop from the comfort of your home with Flipkart's user-friendly interface." />
        <ProjectCard tech="  CSS | HTML | JavaScript | JSON | Vercel" link="https://project-boatlifestyle-clone-masai.vercel.app/" github="https://github.com/ShubhamRaut187/Project-Boatlifestyle-Clone-Masai-" avatar={boat} name="Boat LifeStyles" desc="Explore the fascinating world of boats with our interactive website, showcasing stunning images of products" />
        <ProjectCard tech="  CSS | HTML | JavaScript | JSON | Vercel" avatar={flip} name="Project Blog" desc="Explore our blog website, where ideas come to life. Dive into a world of engaging narratives, expert opinions, and helpful guides" />
      </Box>
    </Box>
  )
}
