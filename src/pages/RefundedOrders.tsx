import { Box } from '@mui/material';
import { FC } from 'react';
import Header from '../components/header/Header';
import Orders from '../components/orders/Orders';
// import { RejectedOrdersData } from '../menu';
import {RefundOrdersData } from '../components/orders/Orders';

const RefundedOrders: FC = () => {
const buttons: BoolButtons = {
        reject: false,
        accept: false,
        mov2Delivered: false,
        orderCollected: false,
        orderRejected: false,
        refund:true
    };

    return (
        <Box>
            <Header title='REFUNDED ORDERS' count={(null)} logo={ false } rejectLink={ true } refundLink={false}  />
            <Orders orders={ RefundOrdersData } buttons={ buttons } />
        </Box>        
    )
};

export default RefundedOrders;
