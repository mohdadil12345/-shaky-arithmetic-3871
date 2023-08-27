import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    Stack,
    Text,
    useToast
  } from '@chakra-ui/react';
  import React, { useContext, useEffect } from 'react';
  import DetailsPage from './DetailsPage';
  import { Navigate, useNavigate } from 'react-router-dom';
  import { authval } from '../context/ContextProvider';
  import axios from 'axios';
  function PurchasedCard({
    name,
    duration,
    lectureType,
    otherDetails,
    img,
    teacherName,
    subject,
    price,
    id,
    item,
  }) {
  

    const navig = useNavigate()
  
const view_course = (id)=> {
  // console.log(id)
    navig(`/coursedetails/${id}`);
}
  

  
    return (
      <Card maxW="sm">
        <CardBody >
          <Image
            src={img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            h={'194px'}
          />
          <Stack mt="6" spacing="1">
            <Heading minH={'48px'} color="purple.800" size="md">
              {name}
            </Heading>
            <Text color="purple.800">{duration}</Text>
            <Button onClick={()=> view_course(id)}>View Course</Button>
          </Stack>
        </CardBody>
      </Card>
    );
  }
  
  export default PurchasedCard;
  