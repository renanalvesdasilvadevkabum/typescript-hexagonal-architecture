import { OrderItemRepositoryPort } from "../../../ports/v1/adapters/order/order-item-repository.port";
import { OrderRepositoryPort } from "../../../ports/v1/adapters/order/order-repository.port";
import { OrderEntityPort } from "../../../ports/v1/business/order/order-entity.port";
import { OrderItemEntityPort } from "../../../ports/v1/business/order/order-item-entity.port";

export class OrderItemTypeOrmRepositoryAdapter implements OrderItemRepositoryPort{
    create(orderItemEntity: OrderItemEntityPort): number {
        throw new Error("Method not implemented.");
    }
    findById(id: string): OrderItemEntityPort {
        throw new Error("Method not implemented.");
    }
  

}