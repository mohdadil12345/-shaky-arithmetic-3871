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

  const { cartitem, setcartitem } = useContext(authval);
  const toast = useToast()

  const Goto_Detailpage = id => {
    //  console.log(id)

    navig(`/details/${item.id}`);
  };

  const addTocartBtn = item => {
    console.log(item);
    const isItemInCart = cartitem.some(cartItem => cartItem.id === item.id);

    if (!isItemInCart) {
      axios
        .post(`https://semi-mock2.onrender.com/course-cart`, item)
        .then(res => {
          // console.log(res.data);
          setcartitem([...cartitem, item]); 
          toast({
            title: 'item added to cart',
            description: "Please go to cart to Buy now",
            status: 'info',
            duration: 9000,
            isClosable: true,
            position:'top-right'
          })
         
        })
        .catch(error => {
          console.error('Error adding item to cart:', error);
        });
    }
  };

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
            onClick={() => addTocartBtn(item)}
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
