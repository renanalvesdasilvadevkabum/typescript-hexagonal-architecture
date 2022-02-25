import { OrderRepositoryPort } from "../../../ports/v1/adapters/order/order-repository.port";
import { OrderEntityPort } from "../../../ports/v1/business/order/order-entity.port";

export class OrderTypeOrmRepositoryAdapter implements OrderRepositoryPort{
    create(orderEntity: OrderEntityPort): number {
        throw new Error("Method not implemented.");
    }
    findById(id: string): OrderEntityPort {
        throw new Error("Method not implemented.");
    }

}