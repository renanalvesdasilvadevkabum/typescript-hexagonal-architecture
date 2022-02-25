import { CreateOrderItemRequestDtoPort } from "../../../../ports/v1/business/order/create-order-item/create-order-item-request-dto.port";
import { CreateOrderRequestDtoPort } from "../../../../ports/v1/business/order/create-order/create-order-request-dto.port";

export class CreateOrderRequestDto implements CreateOrderRequestDtoPort {    
    customerName: string;
    distributionCenterDocument: string;
    amountOrder: number;
    items: CreateOrderItemRequestDtoPort[];

    validate(): string[] {
        let errors: string[] = [];
        
        if(!this.customerName) {
            errors.push("customerName is required!");
        }
        if(!this.distributionCenterDocument) {
            errors.push("distributionCenterDocument is required!");
        }
        if(!this.amountOrder) {
            errors.push("amountOrder is required!");
        }
        if(!this.items) {
            errors.push("items is required!");
        }

        let itemsErrors = [];

        for(const item of this.items) {
            let itemError = item.validate();

            itemsErrors.push(itemError);
        }

        return errors;
    }
}