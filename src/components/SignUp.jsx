import React, { useContext, useState } from 'react';
import { Select, useToast } from '@chakra-ui/react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { authval } from '../context/ContextProvider';

function SignUp() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [username, setusername] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { state, logout} = useContext(authval);

  const user_fun = e => {
    setusername(e.target.value);
  };
  const email_fun = e => {
    setemail(e.target.value);
  };
  const pass_fun = e => {
    setpassword(e.target.value);
  };

  const signup_form = e => {
    e.preventDefault();
    // console.log(username, email, password)
    let obj = {
      username: username,
      email: email,
      password: password,
    };
    // console.log(obj)
    let userdata = JSON.parse(localStorage.getItem('signup_data'));

    if (userdata) {
      userdata.push(obj);
      localStorage.setItem('signup_data', JSON.stringify(userdata));
    } else {
      localStorage.setItem('signup_data', JSON.stringify([obj]));
    }
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
    onClose();
    logout()
  };

  return (
    <>
      <Button onClick={onOpen}>SignUp</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SignUp</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Box>
                <form onSubmit={e => signup_form(e)}>
                  <FormControl
                    display="flex"
                    flexDirection={'column'}
                    gap={'10px'}
                  >
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="text"
                      name="username"
                      onChange={e => user_fun(e)}
                    />
                    <Select
                      placeholder="Gender"
                      bg="#e8f0fe"
                      borderColor="tomato"
                    >
                      <option value="option1">Male</option>
                      <option value="option2">Female</option>
                    </Select>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      onChange={e => email_fun(e)}
                    />
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      onChange={e => pass_fun(e)}
                    />
                    <Button
                      type="submit"
                      bg={'#c4fbd3'}
                      mt={'20px'}
                      boxShadow="base"
                    >
                      Submit
                    </Button>
                    {/* <Link to="/login">Already have anaccount Login</Link> */}
                  </FormControl>
                </form>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignUp;
