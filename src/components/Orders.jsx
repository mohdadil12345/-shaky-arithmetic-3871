import React, { useContext } from 'react';
import { authval } from '../context/ContextProvider';
import PurchasedCard from './PurchasedCard';

function Orders() {
  const { myOrder } = useContext(authval);

  return (
    <div>
      {myOrder.map(item => (


    <PurchasedCard {...item}/>

      ))}
    </div>
  );
}

export default Orders;
