import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import fur from './images/funiture_project.png'
import flip from './images/flipkart.png'
import boat from './images/boat.png'
import youtube from './images/youtube.png'
import food from './images/food.png'
import blog from './images/blog.png'
import netflix from './images/netflix.png'
import travel from './images/travel_pic.png'

import { ProjectCard } from './ProjectCard'

export const Project = () => {
  return (
    <Box id="projects" >

      <Text data-aos="fade-right" data-aos-duration="1000"
        fontSize={["3xl", "4xl", "4xl", "4xl"]} mb={"30px"}
        color={"#03c8d7"} fontWeight={"700"}
        className='project-title'
        textAlign={"center"} border={"1px solid"} w={'max-content'} margin={"40px auto"} padding={"0px 40px"}>Projects</Text>

      <Box className='project_main'>
        <ProjectCard tech=" React | Redux | CSS | HTML | JavaScript | JSON | Vercel | Charkra UI" github="https://github.com/Abidkhan263187/Project-Furnitore-store" link="https://furniture-store-mu.vercel.app/" avatar={fur} name="Furniture Store" desc="Furniture Store: Your One-Stop Shop for Stylish Home Furnishings. Create your dream living space with our versatile products." />
        <ProjectCard tech="  CSS | HTML | JavaScript | JSON | Vercel | Chakra UI | MongoAtlas | Mongoose | express.js | React | Redux " link="https://blog-website-sand-kappa.vercel.app/" github="https://github.com/Abidkhan263187/blog_website_backendnpm" avatar={blog} name="Multi-User Blog Website" desc="Explore and share your thoughts with the world, The world eagerly awaits your insights, your stories, and your unique perspective." />
        <ProjectCard tech="  CSS | HTML | JavaScript | Vercel | Local-storage " github="https://github.com/Abidkhan263187/Boat_Collections_clone" link="https://boat-collections-clone-db3c.vercel.app/" avatar={boat} name="BoAt-lifestyle Clone" desc="India's  Best Electronics brand Shopping destination  BoatLifestyle clone – where cutting-edge design and user-friendly features converge in perfect harmony." />
        <ProjectCard tech=" React | Redux | JavaScript | MongoAtlas | Vercel | Charkra UI | Google-login | API | express.js" github="https://github.com/Abidkhan263187/Travelena_Travel_website" link="https://traveleena.vercel.app/" avatar={travel} name="Travelena" desc="Travelena: Discover breathtaking landscapes, vibrant cultures, and unforgettable adventures with our immersive travel experiences." />
        <ProjectCard tech=" React | Redux | JavaScript  | Vercel | Material UI | Google-login | TMDB-API | express.js" github="https://github.com/Abidkhan263187/Netlfix_clone" link="https://netflix-clone-fesbwrhjq-abidkhan263187.vercel.app/" avatar={netflix} name="Netflix-clone" desc="Netflix Clone: A Netflix clone is a streaming platform replica that provides a vast library of movies, TV shows, and original content." />  <ProjectCard tech="  CSS | HTML | JavaScript | API | Vercel | React | Redux | Bootstrap" github="https://github.com/Abidkhan263187/food_point" link="https://dawat-e-asr.vercel.app" avatar={food} name="Food Order App" desc="Indulge in a seamless food ordering experience through our user-friendly app – your gateway to delicious delights." />
        <ProjectCard tech="  CSS | HTML | JavaScript | JSON | Vercel" github="https://github.com/Abidkhan263187/Project-FlipKart-Website-Clone" link="https://flipkartclone-black.vercel.app/index.html" avatar={flip} name="Flipkart" desc="Flipkart: India's Leading Online Shopping Destination. Shop from the comfort of your home with Flipkart's user-friendly interface." />
        <ProjectCard tech="  CSS | HTML | JavaScript | Vercel | Fetch API " github="https://github.com/Abidkhan263187/youtube_clone" link="https://youtube-clone-plum-sigma.vercel.app/" avatar={youtube} name="YouTube Clone" desc="Explore clone of YouTube which I just created in 4 hours including functionlaity and responsiveness" />



      </Box>
    </Box>
  )
}
