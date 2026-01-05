import clientPromise from '../../lib/mongodb';
import { NextResponse } from 'next/server';

// Revalidate interval
export const revalidate = 10;

// GET: Fetch all codes
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('Code');

    const codes = await collection.find({}).toArray();
    return NextResponse.json(codes);
  } catch (error) {
    console.error('Error fetching codes:', error);
    return NextResponse.json({ error: 'Failed to fetch codes' }, { status: 500 });
  }
}

// PATCH: Update code's isUsed flag
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { code, isUsed } = body;

    if (!code) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('Code');

    const result = await collection.updateOne(
      { code },
      { $set: { isUsed: isUsed === true } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Code not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating code:', error);
    return NextResponse.json({ error: 'Failed to update code' }, { status: 500 });
  }
}
