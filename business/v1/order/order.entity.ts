import { OrderEntityPort } from "../../../ports/v1/business/order/order-entity.port";
import { OrderItemEntityPort } from "../../../ports/v1/business/order/order-item-entity.port";


export class OrderEntity implements OrderEntityPort {
    id: string;
    customerName: string;
    distributionCenterDocument: string;
    amountOrder: number;
    items: OrderItemEntityPort[];

}