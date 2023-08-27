import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import { Box } from '@chakra-ui/react';
import Courses from './Courses';
import Payment from './Payment';
import DetailsPage from './DetailsPage';
import Cart from './Cart';
import Orders from './Orders';
import CourseDetail from './CourseDetail';

function AllRoutes() {
  return (
    <Box
      mt={'60px'}
      ml={["none","none",'200px']}
      p={'20px'}
      bg="#f3f2ff"
      minH={'calc(100vh - 60px - 287px)'}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/details/:id" element={<DetailsPage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/payments" element={<Payment/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/coursedetails/:id" element={<CourseDetail/>} />
       
        
      </Routes>
    </Box>
  );
}

export default AllRoutes;
