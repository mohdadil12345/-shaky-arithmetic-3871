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

function SingleCard() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
          </Text>
        </Stack>
        <Box spacing="2" mt={'10px'} display={"flex"} justifyContent={"space-between"}>
          <Text color="purple.600" fontSize="2xl">
            RS: 450
          </Text>
          <Button variant="ghost" colorScheme="purple">
            Add to cart
          </Button>
          <Button variant="solid" colorScheme="purple">
            Buy now
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
}

export default SingleCard;