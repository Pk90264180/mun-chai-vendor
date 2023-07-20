import { Button, ButtonProps, styled, Typography } from "@mui/material";

const BlackColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white",
    backgroundColor: "black",
    height: "56px",
    boxShadow: "0px 0px 0px 0px",
    border:"1px solid #211F20",
    textTransform: 'capitalize',
    padding:"25px",
    width: "64%",
    
}));


const AcceptButton = (props:any) => {

  

  // const AcceptButton2 =()=>{
    
  //   props.onSubmit()
  //   console.log(props.onSubmit)
  // }
 
   
  return (
    <BlackColorButton sx={{
      '&:hover': {
        backgroundColor: '#EFEFEF',
        color: 'black',
      },
    }} variant='contained' {...props}>
        <Typography className='Button-Text'>Accept</Typography>
    </BlackColorButton>
  )
};

export default AcceptButton;
