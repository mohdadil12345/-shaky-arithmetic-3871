import React from 'react';
import Card from './SingleCard';
import { Box, HStack } from '@chakra-ui/react';

let data = [
    {},
     {},
    {},
     {},
    {},
     {},
];
function Courses() {
  return (
    <Box display={"flex"} flexWrap={"wrap"} gap={"20px"} justifyContent={"center"}>
      {data.map(ele => (
        <Card />
      ))}
    </Box>
  );
}

export default Courses;
