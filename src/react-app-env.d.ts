/// <reference types="react-scripts" />
interface OrderItem {
    item_id: number;
    order_item_name: string;
    quantity: number;
    price: number;
}

interface Order {
    order_id: number;
    mobile: number;
    order_items: OrderItem[];
    online_service_charge: number;
    total_quantity: number;
    total_price: number;
    time?: string;
}

interface TableBodyProps {
    orderItems: OrderItem[];
    osc: number;
    tot_qty: number;
    tot_price: number;
}

interface OrderHeaderProps {
    orderId: number;
    mob: number;
}
interface Props {
    orders: Order[];
    buttons: BoolButtons;
}

interface BoolButtons {
    reject: boolean;
    accept: boolean;
    mov2Delivered: boolean;
    orderCollected: boolean;
    orderRejected: boolean;
    refund:boolean;
}

interface HeaderProps {
    title: string;
    count: any;
    logo: boolean;
    rejectLink: boolean;
    refundLink: boolean;
    
}

interface TimeProps {
    time: string;
}
