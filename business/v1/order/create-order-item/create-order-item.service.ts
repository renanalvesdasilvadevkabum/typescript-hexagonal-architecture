import { OrderItemRepositoryPort } from "../../../../ports/v1/adapters/order/order-item-repository.port";
import { CreateOrderItemRequestDtoPort } from "../../../../ports/v1/business/order/create-order-item/create-order-item-request-dto.port";
import { CreateOrderItemServicePort } from "../../../../ports/v1/business/order/create-order-item/create-order-item-service.port";
import { OrderItemEntityPort } from "../../../../ports/v1/business/order/order-item-entity.port";
import { ResponsePort } from "../../../../ports/v1/business/response/response.port";
import { BAD_REQUEST, OK } from "../../response/codes-response.constants";
import { Response } from "../../response/response";
import { OrderItemEntity } from "../order-item.entity";

export class CreateOrderItemService implements CreateOrderItemServicePort {
    constructor(private orderItemRepositoryPort: OrderItemRepositoryPort) {

    }

    startTransaction() {
        throw new Error("Method not implemented.");
    }
    finishTransaction() {
        throw new Error("Method not implemented.");
    }
    commit() {
        throw new Error("Method not implemented.");
    }
    rollback() {
        throw new Error("Method not implemented.");
    }
    execute(dto: CreateOrderItemRequestDtoPort): ResponsePort<OrderItemEntityPort> {

        let errors = dto.validate();

        if(errors.length) {
            return Response.error(BAD_REQUEST, errors);
        }

        let orderItem = new OrderItemEntity();

        return Response.success<OrderItemEntityPort>(OK, orderItem);
    }

}