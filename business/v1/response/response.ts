import { ResponsePort } from "../../../ports/v1/business/response/response.port"

export class Response {
    static success<T>(codeResponse: any, data?: any): ResponsePort<T>{
        return {
            code: codeResponse.code,
            status: codeResponse.status,
            success: true,
            data
        }
    }

    static error<T>(codeResponse: any, error: any, data?: any): ResponsePort<T> {
        return {
            code: codeResponse.code,
            success: false,
            status: codeResponse.status,
            error,
            data
        }
    }
};