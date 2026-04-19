import fs from 'fs';
import multer from "multer";
import { join, extname } from 'path';
import { Request } from "express";
import { randomBytes } from 'crypto';
import { ApiError } from '../utils/ApiError';

let filePath = join(__dirname, '../', '../', 'uploads');
type destinationCbType = (err: Error | null, destination: string) => void;
type fileNameCbType = (err: Error | null, filename: string) => void;

if (!fs.existsSync(filePath)) {
    fs.mkdirSync(
        filePath, {
        recursive: true
    })
}

let upload = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: destinationCbType) => {
        cb(null, filePath);
    },

    filename: (req: Request, file: Express.Multer.File, cb: fileNameCbType) => {
        let fileName = `${randomBytes(10).toString('hex')}${extname(file.originalname)}`;
        cb(null, fileName);
    }
});

let fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    let allowedMimeTypes = ['image/svg', 'image/jpg', 'image/jpeg', 'image/png'];
    if (!allowedMimeTypes.includes(file.mimetype)) {
        throw new ApiError(404, 'invalid file type. please upload correct file');
    } else {
        cb(null, true);
    }
}

export let fileUpload = multer({
    storage: upload,
    limits: { fileSize: 1 * 1024 * 1024 },
    fileFilter: fileFilter
});