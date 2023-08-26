import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,

  Link,

  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { HamburgerIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { authval } from '../context/ContextProvider';

function Navbar() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { state, login , cartitem} = useContext(authval);
 
const searchByname = (e)=> {
  console.log(e.target.value)
}



  return (
    <Box
      className="navbar  flex_row"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
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
        <Heading display={"flex"} color={'purple.500'}  alignItems={"flex-end"} border={"2px dashed"} p={"2px 15px"} borderRadius={"30px"}>
          EDU <Text color={'red.500'} fontFamily={'cursive'} fontSize={"16px"}>CENTER</Text>
        </Heading>
      </Box>
      <Box display={[ "none","none","flex"]} alignItems="center" gap="10px">
        <InputGroup size="md" w={[ "50px","100px", "400px"]}>
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Search"
            onChange={(e)=> searchByname(e)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Text>{state.username}</Text>
      </Box>
      <HamburgerIcon display={[ "flex" ,"flex","none"]}/>

      <Link mr={"400px"} href='/cart'>Cart : {cartitem.length}</Link>
      
    </Box>
  );
}

export default Navbar;
