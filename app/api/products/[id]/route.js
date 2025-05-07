import clientPromise from '../../../lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export const revalidate = 10;

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('Product');

    const data = await collection.find({ _id: new ObjectId(id) }).toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}























export async function PATCH(request, { params }) {
  const { id } = params;

  try {
    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('Product');

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $inc: { views: 1 } }
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}



 