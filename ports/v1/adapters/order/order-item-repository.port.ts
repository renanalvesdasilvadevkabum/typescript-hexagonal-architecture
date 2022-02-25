import { OrderItemEntityPort } from "../../business/order/order-item-entity.port";

export interface OrderItemRepositoryPort {
    create(orderItemEntity: OrderItemEntityPort): number;
    findById(id: string): OrderItemEntityPort;
}