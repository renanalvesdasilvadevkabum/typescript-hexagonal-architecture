import { TransationServicePort } from "../../common/service/transaction-service.port";
import { ResponsePort } from "../../response/response.port";
import { OrderItemEntityPort } from "../order-item-entity.port";
import { CreateOrderItemRequestDtoPort } from "./create-order-item-request-dto.port";

export interface CreateOrderItemServicePort extends TransationServicePort {
    execute(dto: CreateOrderItemRequestDtoPort): ResponsePort<OrderItemEntityPort>;
}