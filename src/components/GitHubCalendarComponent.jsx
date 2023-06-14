import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
// import { GitHubCalendar } from 'github-calendar';

const GitHubCalendarComponent = () => {

  return (
    <Box padding={"2%"}>
 <Box className="calendar">
      {/* Loading stuff */}
      <img src="https://ghchart.rshah.org/abidkhan263187" alt="2016rshah's Github chart" />
    </Box>
    </Box>
   
  );
};

export default GitHubCalendarComponent;
