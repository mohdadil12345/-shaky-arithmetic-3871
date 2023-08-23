import React, { useContext, useState } from 'react';
import { authval } from '../context/ContextProvider';
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

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { state, login } = useContext(authval);

  const email_fun = e => {
    setemail(e.target.value);
  };

  const pass_fun = e => {
    setpassword(e.target.value);
  };

  const form_submit = e => {
    e.preventDefault();
    // console.log(email, password)

    let userdata = JSON.parse(localStorage.getItem('signup_data'));

    let checklogin = userdata.find(
      item => item.email == email && item.password == password
    );
    console.log(checklogin);
    if (checklogin) {
      alert('login succesfull');
      login(checklogin);
    } else {
      alert('somehtin went wrong');
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Box>
                <form onSubmit={e => form_submit(e)}>
                  <FormControl
                    display="flex"
                    flexDirection={'column'}
                    gap={'10px'}
                  >
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
                      LOGIN
                    </Button>
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

export default Login;
