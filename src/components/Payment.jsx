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
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const initial = {
  name: '',
  email: '',
  address: '',
  phoneNumber: '',
};

function Payment() {
  const [info, setinfo] = useState(initial);
  const [show, setshow] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    setshow(false)
  };

  return (
    <>

{show ?    <Box>

   
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
</Box> :       <Box>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        mt={'20px'}
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md" py="2">
              Name : {info.name}
            </Heading>

            <Heading size="md" py="2">
              Email : {info.email}
            </Heading>

            <Heading size="md" py="2">
              Address : {info.address}
            </Heading>

            <Heading size="md" py="2">
              Phone Number : {info.phoneNumber}
            </Heading>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      </Box>

   }


      



    </>
  );
}

export default Payment;
