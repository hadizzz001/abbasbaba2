import { NextResponse } from "next/server"
import prisma from "../../../libs/prismadb"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {firstname, lastname, email, phone, type, message} = body;

        const newOrder = await prisma.order.create({
            data: {
                firstname,
                lastname,
                email,
                phone,
                type,
                message
            }
        })

        return NextResponse.json(newOrder);

    } catch(err) {
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}

 