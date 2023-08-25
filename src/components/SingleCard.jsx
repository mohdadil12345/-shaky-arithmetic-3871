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
} from '@chakra-ui/react';
import React from 'react';
import DetailsPage from './DetailsPage';
import { Navigate, useNavigate } from 'react-router-dom';

function SingleCard({
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
  const navig = useNavigate();
  

  const Goto_Detailpage = id => {
    //  console.log(id)

    navig(`/details/${item.id}`);
  };

  const addTocartBtn = ()=> {
    alert("kk")
  }

  return (
    <Card maxW="sm">
      <CardBody onClick={() => Goto_Detailpage(id)}>
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
          <Text color="purple.800" fontSize="2xl">
            RS: {price}
          </Text>
          <Text color="purple.800">{duration}</Text>
        </Stack>
      </CardBody>
      <CardFooter h={'max-content'} pt={'0'}>
        <Box
          mt={'10px'}
          display={'flex'}
          justifyContent={'space-between'}
          w={'100%'}
        >
          <Button
            onClick={() => addTocartBtn()}
            variant="solid"
            colorScheme="purple"
          >
            Add to cart
          </Button>
          <Button variant="solid" colorScheme="green">
            Buy now
          </Button>
        </Box>
      </CardFooter>
    </Card>
  );
}

export default SingleCard;
