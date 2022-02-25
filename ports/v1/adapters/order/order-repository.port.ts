import { OrderEntityPort } from "../../business/order/order-entity.port";

export interface OrderRepositoryPort {
    create(orderEntity: OrderEntityPort): number;
    findById(id: string): OrderEntityPort;
}