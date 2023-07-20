import { fetchDataFromAllEndpoints } from '../components/orders/OrdersPlaced';
import { useEffect, useState } from 'react';
import { FC } from 'react';
import { Box } from '@mui/material';
import Orders from '../components/orders/Orders';
// import { DeliveredOrdersData } from '../menu';
// import { DeliveredOrdersData } from '../components/orders/Orders';
import Header from '../components/header/Header';

const DeliveredOrders: FC = () => {
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
  const { placed, accepted, delivered, rejected, refunded } = fetchedData;
  // ===================================================================================================

  const buttons: BoolButtons = {
    reject: false,
    accept: false,
    mov2Delivered: false,
    orderCollected: true,
    orderRejected: false,
    refund: false,
  };

  return (
    <Box>
      <Header
        title="DELIVERED"
        count={delivered.length}
        logo={true}
        rejectLink={true}
        refundLink={false}
      />
      <Orders orders={delivered} buttons={buttons} />
    </Box>
  );
};

export default DeliveredOrders;
