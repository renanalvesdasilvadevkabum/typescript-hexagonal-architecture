import { CreateOrderManagerlogPort } from "../../../../ports/v1/adapters/managerlog/create-order-managerlog.port";
import { OrderRepositoryPort } from "../../../../ports/v1/adapters/order/order-repository.port";
import { CreateOrderItemServicePort } from "../../../../ports/v1/business/order/create-order-item/create-order-item-service.port";
import { CreateOrderRequestDtoPort } from "../../../../ports/v1/business/order/create-order/create-order-request-dto.port";
import { CreateOrderServicePort } from "../../../../ports/v1/business/order/create-order/create-order-service.port";
import { OrderEntityPort } from "../../../../ports/v1/business/order/order-entity.port";
import { ResponsePort } from "../../../../ports/v1/business/response/response.port";
import { BAD_REQUEST, OK } from "../../response/codes-response.constants";
import { Response } from "../../response/response";
import { OrderEntity } from "../order.entity";

export class CreateOrderService implements CreateOrderServicePort{

    constructor(
        private orderRepository: OrderRepositoryPort, 
        private createOrderItemService: CreateOrderItemServicePort,
        private createOrderManagerlogPort: CreateOrderManagerlogPort){

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

    execute(dto: CreateOrderRequestDtoPort): ResponsePort<OrderEntityPort> {
        let errors = dto.validate();

        if(errors.length) {
            return Response.error(BAD_REQUEST, errors);
        }

        let order = new OrderEntity();
        order.id = new Date().getTime().toString();

        for(const createOrderItemDto of dto.items) {
            const response = this.createOrderItemService.execute(createOrderItemDto);
            if(!response.success) {
                
            }
        }

        this.createOrderManagerlogPort.execute({
            OrderFrom: order.id,
            ValueOrder: order.amountOrder
        });

        return Response.success<OrderEntityPort>(OK, order);
    }

}