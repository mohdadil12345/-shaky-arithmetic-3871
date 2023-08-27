import React, { useContext } from 'react';
import { authval } from '../context/ContextProvider';
import PurchasedCard from './PurchasedCard';
import { Box } from '@chakra-ui/react';

function Orders() {
  const { myOrder } = useContext(authval);

  return (
    <Box display={"flex"} gap={"10px"} justifyContent={"space-between"} flexWrap={"wrap"}>
      {myOrder.map(item => (
        <PurchasedCard {...item} />
      ))}
    </Box>
  );
}

export default Orders;
