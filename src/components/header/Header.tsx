import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chip, Stack, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Header: FC<HeaderProps> = ({ title, count, logo, rejectLink, refundLink }: HeaderProps) => {

    const navigate = useNavigate();
    // function handleDelete() {
    //     alert('You clicked the delete icon.'); // eslint-disable-line no-alert
    //   }
    return (
        
        <div className='headerMenu'>
            <Stack className='headerInside' direction="row" alignItems='center' justifyContent="space-between" sx={{ padding: '30px 30px 0 30px' }}>
            {
                logo ? <img src='/MunCHai-Logo.png' width="70px" alt="Mun-Chai Logo" /> : <ArrowBackIcon sx={{width:"auto", cursor:"pointer"}} onClick={ () => navigate('/') } />
            }
            <Typography variant='h3' className='Heading2-Text displayNone' >{ title } {count?"("+count+")":""}  </Typography>
            {
                rejectLink ? <Chip
                sx={{
                    "& .MuiChip-icon": {order: 1, marginRight: "5px",  marginLeft:"0", fontSize:"14px",
                    cursor: "pointer"
                      },
                  }} label='Rejected' icon={<ArrowForwardIosIcon />} className='Heading-chip' onClick={() => navigate('/rejected') } /> 
                           : <Chip label={'Rejected'} icon={<ArrowForwardIosIcon />}  sx={{ display: 'none', "& .MuiChip-icon": {
                            order: 1, marginRight: "5px",  marginLeft:"0", fontSize:"14px",
                    cursor: "pointer"
                          },}} />


                           
            }

            {
                 refundLink ? <Chip sx={{
                    "& .MuiChip-icon": {
                        order: 1, marginRight: "5px",  marginLeft:"0", fontSize:"14px",
                    cursor: "pointer"
                      },
                  }} label='Refunded' icon={<ArrowForwardIosIcon />} className='Heading-chip' onClick={() => navigate('/refunded') } /> 
                 : <Chip label='Refunded' icon={<ArrowForwardIosIcon />} sx={{ display: 'none', "& .MuiChip-icon": {
                    order: 1, marginRight: "5px",  marginLeft:"0", fontSize:"14px",
                    cursor: "pointer"
                  },}} />
            }
            <img alt="Cookie" style={{position:"absolute", left:"16%", top: "-56%" }} src='/Cookie.png' width="140px"/>
        </Stack>
        <Stack className='DesktopNone'>
            <Typography variant='h3' className='Heading2-Text' >{ title } {count?"("+count+")":""}  </Typography>
        </Stack>
        </div>
        
          


    )
};

export default Header;
