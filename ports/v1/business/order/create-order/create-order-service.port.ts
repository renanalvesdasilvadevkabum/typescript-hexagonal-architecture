import { TransationServicePort } from "../../common/service/transaction-service.port";
import { ResponsePort } from "../../response/response.port";
import { OrderEntityPort } from "../order-entity.port";
import { CreateOrderRequestDtoPort } from "./create-order-request-dto.port";

export interface CreateOrderServicePort extends TransationServicePort{
    execute(dto: CreateOrderRequestDtoPort): ResponsePort<OrderEntityPort>;
}