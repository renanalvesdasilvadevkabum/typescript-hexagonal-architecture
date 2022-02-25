import { CreateOrderItemRequestDtoPort } from "../../../../ports/v1/business/order/create-order-item/create-order-item-request-dto.port";

export class CreateOrderItemRequestDto implements CreateOrderItemRequestDtoPort {    
    name: string;
    qty: number;
    value: number;

    validate(): string[] {
        let errors: string[] = [];
        
        if(!this.name) {
            errors.push("name is required!");
        }
        if(!this.qty) {
            errors.push("qty is required!");
        }
        if(!this.value) {
            errors.push("value is required!");
        }

        return errors;
    }

}