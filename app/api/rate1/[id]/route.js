 
 

import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const products = await prisma.review.findMany({
      where: {
        stars: {  contains: id }
      }
     });

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


