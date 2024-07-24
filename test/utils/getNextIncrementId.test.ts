
import { getNextIncrementId } from '../../src/utils/getNextIncrementId';
import { RecordRepository } from '../../src/infrastructure/RecordRepository';

jest.mock('../../src/infrastructure/RecordRepository');

describe('getNextIncrementId', () => {
    it('should return the next increment_id', async () => {
        (RecordRepository.getLastRecord as jest.Mock).mockResolvedValue({ incrementId: 1 });

        const incrementId = await getNextIncrementId();
        expect(incrementId).toBe(2);
    });
});
