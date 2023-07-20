import { FC } from 'react';
import { Box } from '@mui/material';
import Orders from '../components/orders/Orders';
// import { DeliveredOrdersData } from '../menu';
import { DeliveredOrdersData } from '../components/orders/Orders';
import Header from '../components/header/Header';

const DeliveredOrders: FC = () => {

    const buttons: BoolButtons = {
        reject: false,
        accept: false,
        mov2Delivered: false,
        orderCollected: true,
        orderRejected: false,
        refund:false,
    };

    return (
        <Box>
            <Header title='DELIVERED' count={ DeliveredOrdersData.length } logo={ true } rejectLink={ true } refundLink={false}  />
            <Orders orders={ DeliveredOrdersData } buttons={ buttons } />
        </Box>
    )
};

export default DeliveredOrders;
