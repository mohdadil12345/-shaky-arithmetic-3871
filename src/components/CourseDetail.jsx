import React, { useContext } from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    HStack,
    Heading,
    Image,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FcApproval } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { authval } from '../context/ContextProvider';
function CourseDetail() {

const {myOrder} = useContext(authval)
    
  return (
       <Card>
                    <CardBody>
                        <Flex  justifyContent="space-between">
                            <Box color="purple.800">
                                <Stack >
                                    <Heading size="md">Basic Details</Heading>
                                    <Text display={"flex"} alignItems={"center"} gap={"10px"}><FaStar color='yellow'/>duration</Text>
                                    <Text display={"flex"} alignItems={"center"} gap={"10px"}><FaStar color='yellow'/> lectureType</Text>
                                    <Text display={"flex"} alignItems={"center"} gap={"10px"}><FaStar color='yellow'/>teacherName</Text>
                                </Stack>
                                <Stack mt="6">
                                    <Heading size="md">Subjects Included in This Course</Heading>
                                    <HStack>
                                        {/* {data.subject.map(item => (
                                            <span>{item}</span>
                                        ))} */}
                                    </HStack>
                                </Stack>
                                <Stack mt="6">
                                    <Heading size="md">Other Details</Heading>
                                    <List spacing={3}>
                                    {/* {data.otherDetails.map(item => ( */}
                                        <ListItem display={"flex"}  gap={"10px"}>
                                          <FcApproval style={{marginTop: "5px"}} /> item
                                        </ListItem>
                                    {/* // ))} */}
                                    </List>
                                </Stack>
                            </Box>
                            <Box
                                flexGrow={'1'}
                                display="flex"
                                flexDirection={'column'}
                                alignItems={'center'}
                            >
                                <Image
                                    // src={data.img}
                                    src=""
                                    alt="Green double couch with wooden legs"
                                    borderRadius="lg"
                        
                                    w={'80%'}
                                />
                                <Stack mt="6" spacing="1" w={'80%'}>
                                    <Heading color="purple.800" size="md">
                                        name
                                    </Heading>
                                    <Text color="purple.800" fontSize="2xl">
                                        RS: price
                                    </Text>
                             
                                </Stack>
                            </Box>
                        </Flex>
                    </CardBody>
                </Card>
  );
}

export default CourseDetail;
