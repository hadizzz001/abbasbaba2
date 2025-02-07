import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();



export const POST = async (request) => {
    try {
        const data = await request.json();
        const { inputs, items } = data;

        console.log("items", items);
        console.log("inputs", inputs);


        const newOrder = await prisma.order.create({
            data: {
                userInfo:items,
                cartItems:inputs
              }
        })

        return NextResponse.json(newOrder);

    } catch (err) {
        return NextResponse.json({ message: "POST Error", err }, { status: 500 })
    }
}
