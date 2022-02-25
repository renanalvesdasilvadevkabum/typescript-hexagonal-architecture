import { CreateOrderManagerlogPort } from "../../../ports/v1/adapters/managerlog/create-order-managerlog.port";
import { RequestCreateOrderManagerlogPort } from "../../../ports/v1/adapters/managerlog/request-create-order-managerlog.port";

export class CreateOrderManagerlogAdapter implements CreateOrderManagerlogPort {
    execute(request: RequestCreateOrderManagerlogPort) {
        throw new Error("Method not implemented.");
    }

}