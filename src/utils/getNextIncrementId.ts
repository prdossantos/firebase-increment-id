
import { RecordRepository } from '../infrastructure/RecordRepository';

export const getNextIncrementId = async (): Promise<number> => {
    const lastRecord = await RecordRepository.getLastRecord();
    return lastRecord ? (lastRecord.incrementId || 0) + 1 : 1;
};
