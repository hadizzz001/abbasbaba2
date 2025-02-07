  

import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

 
export async function GET(req) {
  try {
    const products = await prisma.review.findMany({ });

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




export const POST = async (request) => {
    try {
        const body = await request.json();
        const {name, description,stars} = body;

        const newOrder = await prisma.review.create({
            data: {
                name, description,stars
            }
        })

        return NextResponse.json(newOrder);

    } catch(err) {
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}

 