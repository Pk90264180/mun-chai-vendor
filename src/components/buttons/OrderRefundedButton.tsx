import { FC } from "react";
import { Button, ButtonProps, styled, Typography } from "@mui/material";

const TextButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "black",
    boxShadow: "0px 0px 0px 0px",
    background : "#EFEFEF",
    borderRadius: "8px",
    textTransform: 'capitalize',
    height: "56px",
    padding: "25px",
    width: "100%",
    // margin:'14px'
    
   
}));


const OrderRefundedButton: FC<TimeProps> = ({ time }: TimeProps) => {
    return (
        <TextButton variant='text' >
            <Typography className='Button-Text'>Refunded at { time }</Typography>
        </TextButton>            
    )
};

export default OrderRefundedButton;
