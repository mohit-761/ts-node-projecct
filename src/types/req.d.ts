import { NextFunction, Response } from "express";

export type RequestHandlerType = (
    req: T,
    res: Response,
    next: NextFunction
) => Promise<any> | void;