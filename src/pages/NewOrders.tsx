import { FC } from "react";
import { Box } from "@mui/material";
import Orders from "../components/orders/Orders";
// import { NewOrdersData, RejectedOrdersData } from "../menu";
import Header from "../components/header/Header";
// import RejectedOrders from "./RejectedOrders";
import { Link, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";



const NewOrders: FC = () => {
  const navigate = useNavigate();
  let DataOrder:any = useSelector((state:any)=>state.order);
  let NewOrdersDataAll: any = DataOrder[0].NewOrdersData;
  const buttons: BoolButtons = {
    reject: true,
    accept: true,
    mov2Delivered: false,
    orderCollected: false,
    orderRejected: false,
    refund: false,
  };

  const header2textcolor: any = {
    color: "white",
    height: "56px",
    boxShadow: "0px 0px 0px 0px",
    padding: "00px",
    width: "90%",
  };

  return (
    <Box>
      <Header
        title="NEW ORDERS"
        count={NewOrdersDataAll.length}
        logo={true}
        rejectLink={true}
        refundLink={false}
       
      />
      <div className="TitleBoxSec">
      <Stack
        title="Rejected Orders"
        id="footer2"
        direction="row"
        justifyContent="space-around"
        sx={{
          backgroundColor: "black",
          borderRadius: '8px',
          padding: "20px",
          margin: "10px 30px",
          hieght: "83px",
        }}
      >
        <Typography
          variant="h1"
          id="header2"
          className="topstack-Text"
          style={header2textcolor}
        >
          {" "}
          Rejected Orders{" "}
        </Typography>
        <Typography
          variant="h6"
          id="header3"
          style={{ color: "white" , fontSize:"16px", marginRight:"10px"}}
        >
          {"1"}
        </Typography>
        
        {
          <ArrowForwardIcon
            style={{ color: "white" , margin: '0px 0px 0px 0px' }}
            onClick={() => navigate("/rejected")}
          />
        }
      </Stack>
      </div>

      <Orders orders={NewOrdersDataAll} buttons={buttons} />
    </Box>
  );
};

export default NewOrders;
