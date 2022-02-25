import { OrderEntityPort } from "../../../ports/v1/business/order/order-entity.port";
import { OrderItemTypeormEntityAdapter } from "./order-item-typeorm-entity.adapter";

export class OrderTypeormEntityAdapter {
    customerName: string;
    distributionCenterDocument: string;
    amountOrder: number;
    items: OrderItemTypeormEntityAdapter[];

    fromEntity(orderEntity: OrderEntityPort){
        this.amountOrder = orderEntity.amountOrder;
        this.customerName = orderEntity.customerName;
        this.distributionCenterDocument = orderEntity.distributionCenterDocument;
        this.items = orderEntity.items;
    }

    toEntity(): OrderEntityPort{
        return {
            amountOrder: 2,
            customerName: "2",
            distributionCenterDocument: "22",
            items: []
        };
    }
}