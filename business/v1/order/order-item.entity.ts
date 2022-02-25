import { OrderItemEntityPort } from "../../../ports/v1/business/order/order-item-entity.port";

export class OrderItemEntity implements OrderItemEntityPort {
    id: string;
    name: string;
    qty: number;
    value: number;

}