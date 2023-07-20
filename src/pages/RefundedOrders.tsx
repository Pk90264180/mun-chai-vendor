import { fetchDataFromAllEndpoints } from '../components/orders/OrdersPlaced';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { FC } from 'react';
import Header from '../components/header/Header';
import Orders from '../components/orders/Orders';
// import { RejectedOrdersData } from '../menu';
// import {RefundOrdersData } from '../components/orders/Orders';

const RefundedOrders: FC = () => {
  //====================================================================================================
  const [fetchedData, setFetchedData] = useState<any | null>(null);
  useEffect(() => {
    // Fetch data from all endpoints when the component mounts
    fetchDataFromAllEndpoints()
      .then((allData: any) => {
        setFetchedData(allData); // Set the fetched data in the state
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  });
  if (!fetchedData) {
    return <div>Loading...</div>;
  }
  // Destructure the data object to obtain separate variables for each option
  const { refunded } = fetchedData;
  // ===================================================================================================

  const buttons: BoolButtons = {
    reject: false,
    accept: false,
    mov2Delivered: false,
    orderCollected: false,
    orderRejected: false,
    refund: true,
  };

  return (
    <Box>
      <Header
        title={`REFUNDED ORDERS (${refunded.length})`}
        count={null}
        logo={false}
        rejectLink={true}
        refundLink={false}
      />
      <Orders orders={refunded} buttons={buttons} />
    </Box>
  );
};

export default RefundedOrders;
