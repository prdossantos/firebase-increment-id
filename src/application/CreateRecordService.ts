
import { randomUUID } from 'crypto';
import { Record } from '../domain/Record';
import { RecordRepository } from '../infrastructure/RecordRepository';
import { getNextIncrementId } from '../utils/getNextIncrementId';

export class CreateRecordService {
    static async createRecord(name: string): Promise<Record> {
        const record = new Record(randomUUID(), name, 0, new Date());
        await RecordRepository.create(record);
        return record;
    }

    static async setIncrementId(id: string): Promise<void> {
        const incrementId = await getNextIncrementId();
        await RecordRepository.update(id, incrementId);
    }
}
