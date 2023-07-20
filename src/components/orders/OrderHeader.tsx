import { FC } from 'react';
import { Box, Stack } from '@mui/material';

const OrderHeader: FC<OrderHeaderProps> = ({ orderId, mob }: OrderHeaderProps) => {
    return (
        <>
            <Stack direction='row' alignContent='center' justifyContent='space-between' sx={{ margin: '15px' }}>
                <Box>Order ID #{ orderId }</Box>
                <Box>Mob. { mob }</Box>
            </Stack>
        </>
    )
};

export default OrderHeader;
