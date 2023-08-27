import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Img,

  List,
  Stack,
  Text,
  list,
} from '@chakra-ui/react';

import React, { useContext, useEffect } from 'react';
import { authval } from '../context/ContextProvider';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Payment from './Payment';
import { Link } from 'react-router-dom';
// import { toast } from "react-hot-toast";

function Cart() {
  const { cartitem, setcartitem, BuyNow } = useContext(authval);

  const getdata = () => {
    axios.get(`https://semi-mock2.onrender.com/course-cart`).then(res => {
      // console.log(res.data);
      setcartitem(res.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const delete_btn = id => {
    axios
      .delete(`https://semi-mock2.onrender.com/course-cart/${id}`)
      .then(res => {
        // console.log(res.data);
        toast.success('item deleted successfully');

        getdata();
      })
      .catch(error => {
        toast.error('Failed to delete item.');
      });
  };

  return (
    <>
      {cartitem.length > 0 ? (
        <Box>
          {cartitem.map(item => (
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
              h={"100px"}
              mb={"10px"}
            >
              <Image
                objectFit="cover"
                // maxW={{ base: '100%', sm: '200px' }}
                h={'100%'}
                src={item.img}
                alt="Caffe Latte"
                padding={"10px"}
              />

              <Stack>
                <CardBody>
                  <Heading size="md">{item.name}</Heading>

                  <Text py="2">

                    Price : {item.price}
             
                     <Box>
                     {item.otherDetails.map((ele)=> (

                      <Text> {ele}</Text>             

                     ))}
                     </Box>
                         
                   
          
                  </Text>

                </CardBody>
              </Stack>
              <Stack ml={"auto"} mr={"20px"} display={"flex"} alignItems="center" justifyContent="center">
                <Box display={"flex"} alignItems="center" justifyContent="center" gap={"10px"}>
                <Button
                    onClick={() => delete_btn(item.id)}
                    variant="solid"
                    colorScheme="red"
                  >
                    DELETE
                  </Button>
                  <Button>-</Button>
                  <Text>1</Text>
                  <Button>+</Button>
                  <Text>Price</Text>
                </Box>
              </Stack>
            </Card>
          ))}
          <Box>
            <Button onClick={BuyNow} variant="solid" colorScheme="purple">
              Buy Now
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className="empty-cart">
          <Heading>Your cart is empty.</Heading>
          <Img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2p4bHhhNm1tcnF0ejVuMzVsdWM3MmI4YjdqbWtpM3UzN3psanIyZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/giXLnhxp60zEEIkq8K/giphy.gif"
            alt=""
          />
            <Link to = "/">
            <Button mt={'40px'} variant="solid" colorScheme="purple">
              Go to Dashboard Page
            </Button>
            </Link>
         
        </Box>
      )}
    </>
  );
}

export default Cart;
