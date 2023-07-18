import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
// import { GitHubCalendar } from 'github-calendar';
import GitHubCalendar from 'react-github-calendar';



const GitHubCalendarComponent = () => {

  return (
    <Box padding={"2%"} className="react-activity-calendar" >
 <Box className="calendar"data-aos="zoom-in-up" data-aos-duration="1000">
      {/* Loading stuff */}
       <GitHubCalendar id="calendar_img" style={{margin:"auto"}}username="abidkhan263187" /> 
    </Box>
    </Box>
   
  );
};

export default GitHubCalendarComponent;
