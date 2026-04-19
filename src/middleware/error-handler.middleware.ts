import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

export function errorHandler(err: Error | ApiError, req: Request, res: Response, next: NextFunction){

    let status = 500;

    if(err instanceof ApiError){
        status = err.statusCode;
    }

    let message = err.message || 'something went wrong';

    return res.status(status).json(new ApiResponse(status, message, null))
}