import React, { useContext, useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  HStack,
  Text,
  Input,
  Image,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { authval } from '../context/ContextProvider';

function Members({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { student } = useContext(authval);
  const [data, setdata] = useState(student);

  const cours = () => {
    let filter_data = student.filter(e=> e.course_id == id)
    setdata(filter_data)
  };

  useEffect(() => {
    cours();
    console.log(id)
  }, [id]);

  return (
    <>
      <Button onClick={onOpen}>Class Members</Button>
      

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Class Members{' '}
            <Badge
              w="30px"
              display={'inline-flex'}
              alignItems={'center'}
              justifyContent={'center'}
              h="30px"
              ml="1"
              colorScheme="green"
            >
              {data.length}
            </Badge>{' '}
            <Input
              mt={'10px'}
              size={'sm'}
              placeholder="Enter Student Name"
              type="text"
            ></Input>
          </ModalHeader>
          <ModalCloseButton />
          <Divider/>
          <ModalBody>
            {data.map(user => (
              <Box
                mb={'10px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                  <Image
                    boxShadow={'1px 1px 10px rgba(0,0,0,0.2)'}
                    borderRadius={'50%'}
                    h={'40px'}
                    src={
                      user.gender == 'Male'
                        ? '/assets/boy.png'
                        : '/assets/girl.png'
                    }
                    alt=""
                  />
                  <Text>{user.fullname}</Text>
                </Box>

                <Button
                  boxShadow={'1px 1px 10px rgba(0,0,0,0.2)'}
                  colorScheme="whatsapp"
                >
                  Message
                </Button>
              </Box>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Members;
