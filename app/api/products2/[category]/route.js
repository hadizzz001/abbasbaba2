import clientPromise from '../../../lib/mongodb'; // Adjust path as needed
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { category } = params; 
  const categories = category.split(',');  

  try {
    const client = await clientPromise;  
    const db = client.db('test');  
    const collection = db.collection('Product');  

    const data = await collection.find({ category: { $in: categories } }).toArray(); 

    return NextResponse.json(data);  
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
