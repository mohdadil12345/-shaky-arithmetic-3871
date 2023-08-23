import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import About from './About';
import SignUp from './SignUp';
import { Box } from '@chakra-ui/react';

function AllRoutes() {
  return (
    <Box
      mt={'60px'}
      ml={'200px'}
      p={'20px'}
      bg="#f8f7ff"
      minH={'calc(100vh - 60px)'}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Box>
  );
}

export default AllRoutes;
