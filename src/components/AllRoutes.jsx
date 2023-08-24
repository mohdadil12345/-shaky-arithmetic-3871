import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SignUp from './SignUp';
import { Box } from '@chakra-ui/react';
import Courses from './Courses';

function AllRoutes() {
  return (
    <Box
      mt={'60px'}
      ml={["none","none",'200px']}
      p={'20px'}
      bg="#f3f2ff"
      minH={'calc(100vh - 60px)'}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </Box>
  );
}

export default AllRoutes;
