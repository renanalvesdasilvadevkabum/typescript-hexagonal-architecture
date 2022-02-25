import { RequestCreateOrderManagerlogPort } from "./request-create-order-managerlog.port";

export interface CreateOrderManagerlogPort {
    execute(request: RequestCreateOrderManagerlogPort);
}