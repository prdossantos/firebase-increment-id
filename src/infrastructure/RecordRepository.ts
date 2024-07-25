import { db } from './FirebaseConfig';
import { Record } from '../domain/Record';

export class RecordRepository {
  public static async create(record: Record): Promise<void> {
    const recordRef: FirebaseFirestore.DocumentReference = db
      .collection('records')
      .doc(record.id);
    await recordRef.create({
      name: record.name,
      incrementId: record.incrementId,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  static async getLastRecord(): Promise<Record | null> {
    const recordsSnapshot = await db
      .collection('records')
      .orderBy('incrementId', 'desc')
      .limit(1)
      .get();
    const lastRecord = recordsSnapshot.docs[0];
    if (!lastRecord) return null;
    const data = lastRecord.data();
    return new Record(
      lastRecord.id,
      data.name,
      data.incrementId,
      data.createdAt.toDate(),
      data.updatedAt.toDate()
    );
  }

  public static async update(id: string, incrementId: number): Promise<void> {
    const recordRef: FirebaseFirestore.DocumentReference = db
      .collection('records')
      .doc(id);
    await recordRef.set(
      { incrementId: incrementId, updatedAt: new Date() },
      { merge: true }
    );
  }
}
