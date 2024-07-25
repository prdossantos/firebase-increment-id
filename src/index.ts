import { CreateRecordController } from './presentation/CreateRecordController';
import { setIncrementId } from './infrastructure/triggers/setIncrementId';
import { onRequest } from 'firebase-functions/v2/https';
import { firestore } from 'firebase-functions';

exports.createRecord = onRequest(CreateRecordController.createRecord);
exports.setIncrementId = firestore
  .document('records/{docId}')
  .onCreate(setIncrementId);
