
import { CreateRecordService } from '../../src/application/CreateRecordService';
import { RecordRepository } from '../../src/infrastructure/RecordRepository';

jest.mock('../../src/infrastructure/RecordRepository');

describe('CreateRecordService', () => {
    it('should create a new record', async () => {
        const recordId = await CreateRecordService.createRecord('Test Name');
        expect(recordId).toBeDefined();
        expect(RecordRepository.create).toHaveBeenCalled();
    });

    it('should set the incrementId field', async () => {
        await CreateRecordService.setIncrementId('testId');
        expect(RecordRepository.update).toHaveBeenCalledWith('testId', 1);
    });
});
