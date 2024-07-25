import { DocumentSnapshot } from 'firebase-admin/firestore';
import { CreateRecordService } from '../../application/CreateRecordService';

export const setIncrementId = async (snap: DocumentSnapshot): Promise<void> => {
  await CreateRecordService.setIncrementId(snap.id);
};
