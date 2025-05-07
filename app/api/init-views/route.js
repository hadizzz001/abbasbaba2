import clientPromise from '../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('Product');

    const result = await collection.updateMany(
      { views: { $exists: false } },
      { $set: { views: 20 } }
    );

    return NextResponse.json({ success: true, updated: result.modifiedCount });
  } catch (error) {
    console.error('Error updating views:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
