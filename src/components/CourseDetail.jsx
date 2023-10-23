import React, { useContext, useEffect, useState } from 'react';
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { FcApproval } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';
import { authval } from '../context/ContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Members from './Members';

let videoData = ['_jOqYe0eFqY' , '1EghfNK218U' , 'XMhHEVznWEY' , 'fDSd2fudits' ];
function CourseDetail() {
  const { myOrder } = useContext(authval);

  const { id } = useParams();
  const [data, setdata] = useState({});
  const [showData, setshowData] = useState(false);

  const fetchData = id => {
    axios.get(`https://semi-mock2.onrender.com/courses_online/${id}`).then(res => {
      console.log(res.data);
      setdata(res.data);
      setshowData(true);
    });
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <Stack bg={'white'}>
        <Accordion defaultIndex={[0]} >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Course Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Card>
        {showData && (
          <CardBody>
            <Flex key={data.id} justifyContent="space-between">
              <Box color="purple.800">
                <Stack>
                  <Members id={data.id} />
                  <Heading size="md">Basic Details</Heading>
                  <Text display={'flex'} alignItems={'center'} gap={'10px'}>
                    <FaStar color="yellow" />
                    {data.duration}
                  </Text>
                  <Text display={'flex'} alignItems={'center'} gap={'10px'}>
                    <FaStar color="yellow" /> {data.lectureType}
                  </Text>
                  <Text display={'flex'} alignItems={'center'} gap={'10px'}>
                    <FaStar color="yellow" /> {data.teacherName}
                  </Text>
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
                      <ListItem display={'flex'} gap={'10px'}>
                        <FcApproval style={{ marginTop: '5px' }} /> {item}
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
                </Stack>
              </Box>
            </Flex>
          </CardBody>
        )}
      </Card>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Course Lectures
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {videoData.map((ele , i) => (
        <>
        <Heading mb={"20px"} mt={"40px"}>Chapter {i+1}</Heading>
        <iframe
          width="800"
          height="515"
          src={`https://www.youtube.com/embed/${ele}`}
          frameborder="0"
          allowfullscreen
          ></iframe>
          </>
      ))}
    </AccordionPanel>
  </AccordionItem>
</Accordion>


    </Stack>
  );
}

export default CourseDetail;
