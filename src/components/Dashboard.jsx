import React from 'react';
import { Box, Button, Stack, color } from '@chakra-ui/react';
import Login from './Login';
import { HamburgerIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <Box
      position="fixed"
      zIndex={'999'}
      top="0"
      left="0"
      w="200px"
      h="calc(100vh - 60px)"
      className="navbar  flex_row"
      bg="#7e4ff3"
      color="white"
      display={['none', 'none', 'flex']}
      flexDirection="column"
      justifyContent={'space-between'}
      gap={'20px'}
      mt={'60px'}
      p={'20px'}
      boxShadow="base"
    >
      <Stack>
        <Link to="/">
            <Box _hover={{ bg: 'white', color: "tomato", borderRadius:"4px" }} display={'flex'} alignItems={'center'} gap={'8px'} p={"5px 10px"} fontWeight={"600"}><AddIcon /> Dashboard</Box>
          
        </Link>
        <Link  _hover={{ bg: 'white', color: "tomato", borderRadius:"4px" }} display={'flex'} alignItems={'center'} gap={'8px'}  p={"5px 10px"} fontWeight={"600"} to="/about">
          
          <Box _hover={{ bg: 'white', color: "tomato", borderRadius:"4px" }} display={'flex'} alignItems={'center'} gap={'8px'} p={"5px 10px"} fontWeight={"600"}><WarningIcon /> About</Box>

        </Link>
        <Link  _hover={{ bg: 'white', color: "tomato", borderRadius:"4px" }} display={'flex'} alignItems={'center'} gap={'8px'}  p={"5px 10px"} fontWeight={"600"} to="/signup">
          
          <Box _hover={{ bg: 'white', color: "tomato", borderRadius:"4px" }} display={'flex'} alignItems={'center'} gap={'8px'} p={"5px 10px"} fontWeight={"600"}><WarningIcon /> Signup</Box>
        </Link>
        <Link  _hover={{ bg: 'white', color: "tomato", borderRadius:"4px" }} display={'flex'} alignItems={'center'} gap={'8px'}  p={"5px 10px"} fontWeight={"600"} to="#">
          
          <Box _hover={{ bg: 'white', color: "tomato", borderRadius:"4px" }} display={'flex'} alignItems={'center'} gap={'8px'} p={"5px 10px"} fontWeight={"600"}><WarningIcon /> Students</Box>
        </Link>
      </Stack>

      <Stack>
        <Login />
        <Button>Logout</Button>
      </Stack>
    </Box>
  );
}

export default Dashboard;
