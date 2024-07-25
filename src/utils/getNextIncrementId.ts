import { Record } from '../domain/Record';
import { RecordRepository } from '../infrastructure/RecordRepository';

export const getNextIncrementId = async (): Promise<number> => {
  const lastRecord: Record | null = await RecordRepository.getLastRecord();
  return (lastRecord?.incrementId ?? 0) + 1;
};
