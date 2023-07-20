import { FC } from 'react';
import { Box } from '@mui/material';
import Header from '../components/header/Header';
import FooterFor2 from '../components/footer/FooterFor2';
import '../../src/index.css';
// import Orders from '../components/orders/Orders';
// import { NoOrdersData } from '../menu';

const WaitingForOrders: FC = () => {
  return (
    <>
      <Box>
        <Header
          title="NEW ORDERS"
          count={null}
          logo={true}
          rejectLink={true}
          refundLink={false}
        />
        <div
          style={{
            display: 'flex',
            textAlign: 'center',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              marginTop: '30px',
              width: '243px',
              height: '553.2px',
            }}
            component="img"
            alt="The house from the offer."
            src="./Wtimage.svg"
          />
        </div>
      </Box>

      <FooterFor2
        logo={false}
        rejectLink={false}
        refundLink={false}
        title="WAITING FOR ORDERS "
        count={null}
      ></FooterFor2>
    </>
  );
};
export default WaitingForOrders;
