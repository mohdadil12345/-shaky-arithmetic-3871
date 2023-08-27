import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { HamburgerIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import { authval } from '../context/ContextProvider';

function Navbar() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { state, setCourdata, cartitem, globaldata } = useContext(authval);
  // const {globaldata, setGlobalData, courdata, setCourdata} = useContext(authval)

  const searchByname = e => {
    // console.log(e.target.value)

    let sear = globaldata.filter(ele =>
      ele.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(sear);
    setCourdata(sear);
  };

  return (
    <Box
      className="navbar  flex_row"
      display="flex"
      alignItems="center"
      p="10px 20px"
      bg="#fff"
      position="fixed"
      zIndex={'1000'}
      top="0"
      left="0"
      w="100%"
      boxShadow="base"
    >
      <Box>
        <Heading
          display={'flex'}
          color={'purple.500'}
          alignItems={'flex-end'}
          border={'2px dashed'}
          p={'2px 15px'}
          borderRadius={'30px'}
        >
          EDU{' '}
          <Text color={'red.500'} fontFamily={'cursive'} fontSize={'16px'}>
            CENTER
          </Text>
        </Heading>
      </Box>
      <Box
        ml={'auto'}
        display={['none', 'none', 'flex']}
        alignItems="center"
        gap="10px"
      >
        <InputGroup size="md" w={['50px', '100px', '400px']}>
          <Input
            pr="4.5rem"
            type={'text'}
            placeholder="Search"
            onChange={e => searchByname(e)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
        <Link href="/cart">Cart : {cartitem.length}</Link>
        {state.username && (
          <Box display={'flex'} alignItems={'center'} gap={'10px'}>
            <Image
              boxShadow={'1px 1px 10px rgba(0,0,0,0.2)'}
              borderRadius={'50%'}
              h={'40px'}
              src={
                state.gender == 'Male' ? '/assets/boy.png' : '/assets/boy.png'
              }
              alt=""
            />
            <Text>{state.username}</Text>
          </Box>
        )}
      </Box>
      <HamburgerIcon display={['flex', 'flex', 'none']} />
    </Box>
  );
}

export default Navbar;
