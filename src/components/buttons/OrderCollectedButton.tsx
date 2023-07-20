import { FC } from "react";
import { Button, ButtonProps, styled, Typography } from "@mui/material";

const TextButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#211F20",
    boxShadow: "0px 0px 0px 0px",
    background : "#EFEFEF",
    borderRadius: "8px",
    textTransform: 'capitalize',
    height: "56px",
    padding: "25px",
    width: "98%",
    margin:'15px'
    
}));


const OrderCollectedButton: FC<TimeProps> = ({ time }: TimeProps) => {
    return (
        <TextButton variant='text'>
            <Typography className='Button-Text'>Order collected at { time }</Typography>
        </TextButton>            
    )
};

export default OrderCollectedButton;
