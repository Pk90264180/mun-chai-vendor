import { TableHead, TableRow, TableCell } from '@mui/material';
import { FC } from 'react'

const OrderTableHeader: FC = () => {
    return (
        <>
            <TableHead>
                <TableRow sx={{ backgroundColor: '#efefef' }}>
                    <TableCell className='Heading-Text'>Items</TableCell>
                    <TableCell className='Heading-Text' align='center'>Quantity</TableCell>
                    <TableCell className='Heading-Text' align="right">Price</TableCell>
                </TableRow>
            </TableHead>
        </>
    )
};

export default OrderTableHeader;
