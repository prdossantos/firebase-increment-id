import { randomUUID } from 'crypto';
import { Record } from '../domain/Record';
import { RecordRepository } from '../infrastructure/RecordRepository';
import { getNextIncrementId } from '../utils/getNextIncrementId';

export class CreateRecordService {
  public static async createRecord(name: string): Promise<Record> {
    const record: Record = new Record(randomUUID(), name, 0, new Date());
    await RecordRepository.create(record);
    return record;
  }

  public static async setIncrementId(id: string): Promise<void> {
    const incrementId: number = await getNextIncrementId();
    await RecordRepository.update(id, incrementId);
  }
}
