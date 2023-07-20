import { FC , useEffect } from "react";
import {Link, Stack,Typography } from "@mui/material";
import './FooterFor2.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



const FooterFor2: FC<HeaderProps> = ({ title, count }: HeaderProps) =>{
return (
       <Stack sx={{
       margin: "10px", textAlign:"center", marginBottom:"140px", marginTop:"30px"}} >
       <Typography variant='h3' className='FooterFor2'  >{ title } {count} </Typography>
        </Stack>      
    )
};

export default FooterFor2;
