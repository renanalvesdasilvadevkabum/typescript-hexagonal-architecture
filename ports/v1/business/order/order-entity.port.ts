import { OrderItemEntityPort } from "./order-item-entity.port";

export interface OrderEntityPort {
    customerName: string;
    distributionCenterDocument: string;
    amountOrder: number;
    items: OrderItemEntityPort[];    
}