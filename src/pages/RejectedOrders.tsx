import { fetchDataFromAllEndpoints } from '../components/orders/OrdersPlaced';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { FC } from 'react';
import Header from '../components/header/Header';
import Orders from '../components/orders/Orders';
// import { RejectedOrdersData } from '../menu';
// import { RejectedOrdersData } from '../components/orders/Orders';

const RejectedOrders: FC = () => {
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
    orderCollected: false,
    orderRejected: false,
    refund: false,
  };

  return (
    <Box>
      <Header
        title={`REJECTED`}
        count={rejected.length}
        logo={false}
        refundLink={true}
        rejectLink={false}
      />
      <Orders orders={rejected} buttons={buttons} />
    </Box>
  );
};

export default RejectedOrders;
