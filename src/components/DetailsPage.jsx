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
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FcApproval } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import Members from './Members';
import { authval } from '../context/ContextProvider';
function DetailsPage() {
    const { id } = useParams();
    const [data, setdata] = useState({});
    const [showData, setshowData] = useState(false);


    const fetchData = id => {
        axios.get(`https://semi-mock2.onrender.com/courses/${id}`).then(res => {
            // console.log(res.data);
            setdata(res.data);
            setshowData(true);
        });
    };
    useEffect(() => {
        fetchData(id);
    }, [id]);

    return (
        <>
            {showData ? (
                <Card>
                    <CardBody>
                        <Flex key={data.id} justifyContent="space-between">
                            <Box color="purple.800">
                                <Stack >
                                    <Heading size="md">Basic Details</Heading>
                                    <Text display={"flex"} alignItems={"center"} gap={"10px"}><FaStar color='yellow'/>{data.duration}</Text>
                                    <Text display={"flex"} alignItems={"center"} gap={"10px"}><FaStar color='yellow'/> {data.lectureType}</Text>
                                    <Text display={"flex"} alignItems={"center"} gap={"10px"}><FaStar color='yellow'/> {data.teacherName}</Text>
                                </Stack>
                                <Stack mt="6">
                                    <Heading size="md">Subjects Included in This Course</Heading>
                                    <HStack>
                                        {data.subject.map(item => (
                                            <span>{item}</span>
                                        ))}
                                    </HStack>
                                </Stack>
                                <Stack mt="6">
                                    <Heading size="md">Other Details</Heading>
                                    <List spacing={3}>
                                    {data.otherDetails.map(item => (
                                        <ListItem display={"flex"}  gap={"10px"}>
                                          <FcApproval style={{marginTop: "5px"}} /> {item}
                                        </ListItem>
                                    ))}
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
                                    src={data.img}
                                    alt="Green double couch with wooden legs"
                                    borderRadius="lg"
                                    // h={'194px'}
                                    w={'80%'}
                                />
                                <Stack mt="6" spacing="1" w={'80%'}>
                                    <Heading color="purple.800" size="md">
                                        {data.name}
                                    </Heading>
                                    <Text color="purple.800" fontSize="2xl">
                                        RS: {data.price}
                                    </Text>
                                    <Box mt={'10px'} display={'flex'} gap={'20px'} w={'100%'}>
                                        <Button variant="solid" colorScheme="purple" w={'50%'}>
                                            Add to cart
                                        </Button>
                                        <Button variant="solid" colorScheme="green" w={'50%'}>
                                            Buy now
                                        </Button>
                                    </Box>
                                </Stack>
                            </Box>
                        </Flex>
                    </CardBody>
                </Card>
            ) : (
                'loading'
            )}
            <Members id={id}/>
        </>
    );
}

export default DetailsPage;
