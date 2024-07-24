import { CreateRecordService } from "../../src/application/CreateRecordService";
import { CreateRecordController } from "../../src/presentation/CreateRecordController";

describe('CreateRecordController', () => {
    it('should create a record when a valid name is provided in a POST request', async () => {
        const req: any = {
            method: 'POST',
            body: { name: 'Test Record' }
        } as unknown as Request;
        const res: any = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        } as unknown as Response;

        jest.spyOn(CreateRecordService, 'createRecord').mockResolvedValue({
            id: '1',
            name: 'Test Record',
            incrementId: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        await CreateRecordController.createRecord(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({
            name: 'Test Record'
        }));
    });

    it('should return 403 status code when the request method is not POST', async () => {
        const req: any = {
            method: 'GET',
            body: { name: 'Test Record' }
        } as unknown as Request;
        const res: any = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        } as unknown as Response;

        await CreateRecordController.createRecord(req, res);

        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.send).toHaveBeenCalledWith({
            status: 'error',
            errors: ['Method not allowed']
        });
    });
});
