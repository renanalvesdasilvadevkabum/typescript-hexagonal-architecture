import { DtoValidatePort } from "../../common/dto/dto-validate.port";
import { CreateOrderItemRequestDtoPort } from "../create-order-item/create-order-item-request-dto.port";

export interface CreateOrderRequestDtoPort extends DtoValidatePort{
    customerName: string;
    distributionCenterDocument: string;
    amountOrder: number;
    items: CreateOrderItemRequestDtoPort[]
}