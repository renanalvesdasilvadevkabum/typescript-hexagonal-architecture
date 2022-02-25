import { DtoValidatePort } from "../../common/dto/dto-validate.port"


export interface CreateOrderItemRequestDtoPort  extends DtoValidatePort{
    name: string
    qty: number
    value: number
}