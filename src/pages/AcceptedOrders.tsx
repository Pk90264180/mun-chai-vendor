import { FC } from 'react'
import { Box } from '@mui/material';
import Orders from '../components/orders/Orders';
// import { AcceptedOrdersData } from '../menu';
import { AcceptedOrdersData } from '../components/orders/Orders';
import Header from '../components/header/Header';

 

const AcceptedOrders: FC = () => {

   const buttons: BoolButtons = {
        reject: false,
        accept: false,
        mov2Delivered: true,
        orderCollected: false,
        orderRejected: false,
        refund:false
    };

    return (
        <Box>
            <Header title='ACCEPTED ORDERS' count={ (AcceptedOrdersData.length) } logo={ true } rejectLink={ true } refundLink={false} />
            <Orders orders={ AcceptedOrdersData } buttons={ buttons } />
        </Box>        
    )
};

export default AcceptedOrders;
