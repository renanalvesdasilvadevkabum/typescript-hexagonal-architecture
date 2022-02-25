import { OrderItemEntityPort } from "../../../ports/v1/business/order/order-item-entity.port";
import { OrderTypeormEntityAdapter } from "./order-typeorm-entity.adapter";

export class OrderItemTypeormEntityAdapter {   
    name: string
    qty: number
    value: number

    fromEntity(orderItemEntity: OrderItemEntityPort){
        this.name = orderItemEntity.name;
        this.qty = orderItemEntity.qty;
        this.value = orderItemEntity.value;
    }

    toEntity(): OrderItemEntityPort{
        return {
            name: "222",
            qty: 2,
            value: 2
        };
    }
}