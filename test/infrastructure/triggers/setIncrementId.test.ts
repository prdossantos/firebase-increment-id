
import { setIncrementId } from '../../../src/infrastructure/triggers/setIncrementId';
import { CreateRecordService } from '../../../src/application/CreateRecordService';

jest.mock('../../../src/application/CreateRecordService');

describe('setIncrementId', () => {
    it('should set the increment_id field', async () => {
        const snap: any = {
            id: 'testId'
        };

        await setIncrementId(snap);

        expect(CreateRecordService.setIncrementId).toHaveBeenCalledWith('testId');
    });
});
