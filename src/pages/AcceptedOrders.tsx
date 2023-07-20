import { fetchDataFromAllEndpoints } from '../components/orders/OrdersPlaced';
import { useEffect, useState } from 'react';
import { FC } from 'react';
import { Box } from '@mui/material';
import Orders from '../components/orders/Orders';
// import { AcceptedOrdersData } from '../menu';
// import { AcceptedOrdersData } from '../components/orders/Orders';
import Header from '../components/header/Header';

const AcceptedOrders: FC = () => {
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
  const { accepted } = fetchedData;
  // ===================================================================================================

  const buttons: BoolButtons = {
    reject: false,
    accept: false,
    mov2Delivered: true,
    orderCollected: false,
    orderRejected: false,
    refund: false,
  };

  return (
    <Box>
      <Header
        title="ACCEPTED ORDERS"
        count={accepted.length}
        logo={true}
        rejectLink={true}
        refundLink={false}
      />
      <Orders orders={accepted} buttons={buttons} />
    </Box>
  );
};

export default AcceptedOrders;
