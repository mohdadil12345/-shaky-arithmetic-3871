import { Box, Flex, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <Box ml={"220px"} p="20px" >
      <Flex justify="space-evenly">
        <Box className="part1">
          <Heading mb={"10px"}>Company</Heading>
           <Box display={"flex"} flexDirection={"column"} gap="10px">
           <Text>About us</Text>
          <Text>Careers</Text>
          <Text>Blog</Text>
          <Text>Partner with pharmacy</Text>
          <Text>Sell at PharmasyEasy</Text>
           </Box>
        </Box>
        <Box className="part2">
          <Heading mb={"10px"}>Featured Categories</Heading>
          <Box display={"flex"} flexDirection={"column"} gap="10px">
          <Text>Top Products</Text>
          <Text>Personal Care</Text>
          <Text>HealthCare Devices</Text>
          <Text>Mega Cleanance Sale</Text>
          <Text>Health Food and Drinks</Text>
          </Box>
        </Box>
        <Box className="part3">
          <Heading mb={"10px"}>Need Help</Heading>
          <Box display={"flex"} flexDirection={"column"} gap="10px">
          <Text>Browse All Medicines</Text>
          <Text>Browse All Molecules</Text>
          <Text>Browse All Cities</Text>
          <Text>Browse All Areas</Text>
          <Text>Browse All Stores</Text>
          </Box>
        </Box>
      </Flex>
      <Flex gap="50px" justify={"center"} mt="30px">
        <Heading>Follow us on</Heading>
        <Flex gap="50px" >
          <Img
            src="https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=32x0"
            alt=""
          />
          <Img
            src="https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=32x0"
            alt=""
          />
          <Img
            src="https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=32x0"
            alt=""
          />
          <Img
            src="https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=32x0"
            alt=""
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
