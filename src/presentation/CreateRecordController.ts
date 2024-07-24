
import { Request, Response } from 'express';
import { CreateRecordService } from '../application/CreateRecordService';
import { errorResponse } from '../utils/response';

export class CreateRecordController {
    static async createRecord(req: Request, res: Response): Promise<void> {
        const { name } = req.body;

        if (req.method !== 'POST') {
            res.status(403).send(errorResponse(['Method not allowed']));
        }

        if (!name) {
            res.status(400).send(errorResponse(['Name is required']));
            return;
        }

        try {
            const record = await CreateRecordService.createRecord(name);
            res.status(200).send(record);
        } catch (error: any) {
            res.status(500).send(errorResponse([error.message]));
        }
    }
}
