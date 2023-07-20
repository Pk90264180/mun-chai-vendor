// import { FC } from "react";
import { Button, ButtonProps, styled, Typography } from "@mui/material";
import Timer from "../timer/Timer";

const BorderButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "red",
    boxShadow: "0px 0px 0px 0px",
    border:"1px solid #211F20",
    background : "white",
    textTransform: 'capitalize',
    height: "56px",
    padding: "25px",
    width: "33%",

}));
const RejectButton= (props:any) => {
    return (
        <BorderButton sx={{
            '&:hover': {
              backgroundColor: '#EFEFEF',
              color: 'black',
              border:"1px solid #000",
            },
          }} variant='outlined' {...props} >
            <Typography className='Button-Text'>Reject ({<Timer />})</Typography>
        </BorderButton>            
    )
};

export default RejectButton;
