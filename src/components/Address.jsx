import React from 'react'
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
    Card,
    Image,
    Stack,
    CardBody,
    Text,
    CardFooter,
    Heading,
  } from '@chakra-ui/react';

function Address() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [info, setinfo] = useState(initial);
    const [show, setshow] = useState(true);
    
    const handle_change = e => {
        // const {name, type, value} = e.target
        // console.log(name, value, type)
    
        let obj = { ...info };
        obj[e.target.name] = e.target.value;
    
        setinfo(obj);
      };
    
      const form_submit = e => {
        e.preventDefault();
    
        console.log(info);
        toast.success('your order is booked');
        setshow(false);
      };
  return (
    <Box>
    <Button onClick={onOpen}>Payment Form....</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Payment Form</ModalHeader>
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
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={info.name}
                    onChange={e => handle_change(e)}
                  />
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={info.email}
                    onChange={e => handle_change(e)}
                  />
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    name="address"
                    value={info.address}
                    onChange={e => handle_change(e)}
                  />
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="number"
                    name="phoneNumber"
                    value={info.phoneNumber}
                    onChange={e => handle_change(e)}
                  />
                  <Button
                    type="submit"
                    bg={'#c4fbd3'}
                    mt={'20px'}
                    boxShadow="base"
                  >
                    ORDER
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Box>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  </Box>
  )
}

export default Address