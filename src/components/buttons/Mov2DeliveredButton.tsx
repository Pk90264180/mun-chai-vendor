import { Button, ButtonProps, styled, Typography } from "@mui/material";

const BlackColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white",
    backgroundColor: "black",
    
    boxShadow: "0px 0px 0px 0px",
    border:"1px solid #211F20",
    textTransform: 'capitalize',
    height: "56px",
    padding: "25px",
    width: "100%",
    
    
}));


const Mov2DeliveredButton = (props:any) => {
  return (
    <BlackColorButton sx={{
      '&:hover': {
        backgroundColor: '#EFEFEF',
        color: 'black',
      },
    }} variant='contained' {...props} >
        <Typography className='Button-Text'>Move To Delivered</Typography>
    </BlackColorButton>
  )
};

export default Mov2DeliveredButton;
