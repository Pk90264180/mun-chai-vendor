//import { useEffect, useState } from "react";
import { FC} from "react";
import {
  Box,
  Stack,
  Table,
  TableContainer,
  tableCellClasses,
} from "@mui/material";

import  "../../index.css";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableBody from "./OrderTableBody";
import OrderHeader from "./OrderHeader";
import RejectButton from "../buttons/RejectButton";
import AcceptButton from "../buttons/AcceptButton";
import Mov2DeliveredButton from "../buttons/Mov2DeliveredButton";
import OrderCollectedButton from "../buttons/OrderCollectedButton";
import OrderRejectedButton from "../buttons/OrderRejectedButton";
import { useNavigate } from "react-router-dom";
import RefundButton from "../buttons/RefundButton";
import OrderRefundedButton from "../buttons/OrderRefundedButton";


import { useLocation } from "react-router-dom";


export let AcceptedOrdersData:any = [];
export let DeliveredOrdersData:any = [];
export let RejectedOrdersData:any = [];
export let RefundOrdersData:any =[];



const Orders: FC<Props> = ({ orders, buttons }: Props) => {
  
const history = useLocation();
  const host = history.pathname;
  const navigate = useNavigate();
  
  const handleAccept =(id: any) => {
    // localStorage.setItem("id", JSON.stringify(id));
    Object.values(id);
AcceptedOrdersData = [...AcceptedOrdersData, id]
console.log(AcceptedOrdersData);
    navigate("/accepted");

  }

  function handleMove(id:any) {
    
    Object.values(id);
    DeliveredOrdersData = [...DeliveredOrdersData,id]
    navigate("/delivered");

    

  }

  function movetoRejected(id:any) {
    Object.values(id);
    RejectedOrdersData = [...RejectedOrdersData,id]
    navigate("/rejected");
  }
  function handleRefund(id:any) {
    Object.values(id);
    RefundOrdersData = [...RefundOrdersData,id]

    navigate("/refunded");
  }

  return (
    <div className="middleBox"  style={{marginBottom:'130px'}}>
      {orders.map((order, index) => {
        return (
          <Box
            className="Body2-Text"
            key={order.order_id}
            sx={{
              border: "1px solid #211F20",
              borderRadius: "10px",
              margin: "30px 30px 0 30px",
            
            }}
          >
            <OrderHeader orderId={order.order_id} mob={order.mobile} />
            <div className="tablecontainer">

            <TableContainer >
              <Table
                sx={{
                  [`& .${tableCellClasses.root}`]: {
                    borderBottom: "none",
                  },
                }}
              >
                <OrderTableHeader />
                <OrderTableBody
                  orderItems={order.order_items}
                  osc={order.online_service_charge}
                  tot_qty={order.total_quantity}
                  tot_price={order.total_price}
                />
              </Table>
            </TableContainer>
            </div>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ margin: "15px" }}
            >
              {buttons.reject ? (
                <>
                  <RejectButton
                    onClick={() => {
                      movetoRejected(orders.at(index));
                    }}
                  />{" "}
                  <AcceptButton
                    onClick={() => handleAccept(orders.at(index))}
                  />
                </>
              ) : buttons.mov2Delivered ? (
                <Mov2DeliveredButton onClick={() => handleMove(orders.at(index))} />
              ) : buttons.orderCollected ? (
                <OrderCollectedButton time={order.time as string} />
              ) : (
                <>
                  <OrderRejectedButton time={order.time as string} />
                </>
              )}
            </Stack>
              {host === "/rejected" || host === "/refunded" ? (
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ margin: "15px" }}
              >
                {}

                {buttons.refund ? (
                  <OrderRefundedButton time={order.time as string} />
                ) : buttons.reject ? (
                  ""
                ) : (
                  <RefundButton onClick={() => handleRefund(orders.at(index))} />
                )}
              </Stack>
            ) : null}
          </Box>
        );
      })}
    </div>
  );
};

export default Orders;
