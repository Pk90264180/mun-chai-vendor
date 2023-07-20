import { FC } from 'react';
import { Box, Stack, TableBody, TableRow, TableCell } from '@mui/material';
import "../../index.css";

const OrderTableBody: FC<TableBodyProps> = ({ orderItems, osc, tot_qty, tot_price }: TableBodyProps) => {
    return (
        <>
            <TableBody className='tablebody'>
                {
                    orderItems.map(item => (
                        <TableRow key={ item.item_id }>
                            <TableCell>{item.order_item_name}</TableCell>
                            <TableCell align='center'>{item.quantity}</TableCell>
                            <TableCell align="right">&#8377; {item.price}</TableCell>
                        </TableRow>
                    ))
                }
                <TableRow sx={{ borderBottom: "1px solid #211F20" }}>
                    <TableCell>Online Service Charge</TableCell>
                    <TableCell></TableCell>
                    <TableCell align='right'>&#8377; { osc }</TableCell>
                    
                </TableRow>

                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align='center'>{ tot_qty} items</TableCell>
                    <TableCell align='right'>
                        <Stack direction='row' justifyContent='space-between'>
                            <Box component='span'>TOTAL</Box>
                            <Box component='span'>&#8377; { tot_price }</Box>
                        </Stack>
                    </TableCell>
                </TableRow>
            </TableBody>
        </>
    )
};

export default OrderTableBody;
