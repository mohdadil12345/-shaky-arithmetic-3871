import React from 'react';
import { Box, Button, Stack, color, Img } from '@chakra-ui/react';
import Login from './Login';
import { HamburgerIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import saly from '../assests/Saly-10.png';
import SignUp from './SignUp';
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaRegBell,
  FaChalkboardTeacher,
  FaIdCardAlt,
} from 'react-icons/fa';

let linkData = [
  {
    name: 'Dashboard',
    link: '/',
    iconName: <FaIdCardAlt />,
  },
  {
    name: 'courses',
    link: '/courses',
    iconName: <FaGraduationCap />,
  },
  {
    name: 'Teachers',
    link: '/',
    iconName: <FaChalkboardTeacher />,
  },
  {
    name: 'Events',
    link: '/',
    iconName: <FaRegBell />,
  },
  {
    name: 'Finance',
    link: '/',
    iconName: <FaRegBell />,
  },
  {
    name: 'Calender',
    link: '/',
    iconName: <FaCalendarAlt />,
  },
  {
    name: 'Chat',
    link: '/',
    iconName: <FaRegBell />,
  },
  {
    name: 'Notification',
    link: '/',
    iconName: <FaRegBell />,
  },
];

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
      // bg="#7e4ff3"
      bg={"purple.600"}
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
        {linkData.map(ele => (
          <Link to={ele.link} key = {ele.id}>
            <Box
              _hover={{ bg: 'white', color: 'tomato', borderRadius: '4px' }}
              display={'flex'}
              alignItems={'center'}
              gap={'8px'}
              p={'5px 10px'}
              fontWeight={'600'}
            >
              {ele.iconName} {ele.name}
            </Box>
          </Link>
        ))}
        <Img w="200px" src={saly} alt="" />
      </Stack>

      <Stack>
        <Login />
        <Stack>
          <SignUp />
        </Stack>
        {/* <Button>Logout</Button> */}
      </Stack>
    </Box>
  );
}

export default Dashboard;
