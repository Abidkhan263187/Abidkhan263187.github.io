import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import GitHubCalendarComponent from './GitHubCalendarComponent';

export const Stats = () => {
    return (
        <Box id="Statistics" >
            <Heading textAlign={'center'} fontSize={["2xl","3xl","4xl","4xl"]} >My Git  <span  style={{ color: "#03c8d7" }}>Calender</span></Heading>
            <GitHubCalendarComponent />
            <Heading textAlign={'center'} fontSize={["2xl","3xl","4xl","4xl"]}> My github  <span  style={{ color: "#03c8d7" }}>stats</span></Heading>
            <Box className='stat-container'>
                <Box className='statone'>
                    <img 
                        src="https://github-readme-stats.vercel.app/api?username=abidkhan263187&theme=transparent&hide_border=true&include_all_commits=false&count_private=false"
                        alt="GitHub Stats"/>
                </Box>
                <Box className='stattwo'> 
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=abidkhan263187&theme=transparent&hide_border=true" alt="GitHub Streak Stats" />
               </Box>
                <Box className='statthree'> <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=abidkhan263187&theme=transparent&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
                    alt="GitHub Top Languages" />
                  </Box>
            </Box>
        </Box>
    );
};

