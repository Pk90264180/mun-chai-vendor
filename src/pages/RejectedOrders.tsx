import { Box } from '@mui/material';
import { FC } from 'react';
import Header from '../components/header/Header';
import Orders from '../components/orders/Orders';
// import { RejectedOrdersData } from '../menu';
import { RejectedOrdersData } from '../components/orders/Orders';

const RejectedOrders: FC = () => {

    const buttons: BoolButtons = {
        reject: false,
        accept: false,
        mov2Delivered: false,
        orderCollected: false,
        orderRejected: false,
        refund:false

    };

    return (
        <Box>
            <Header title='REJECTED' count={ RejectedOrdersData.length } logo={ false } refundLink={ true } rejectLink={false} />
            <Orders orders={ RejectedOrdersData } buttons={ buttons } />
            
        </Box>        
    )
};

export default RejectedOrders;
