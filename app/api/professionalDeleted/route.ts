//@ts-nocheck

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient({
  log: ['query'],
});


export async function DELETE(req: NextRequest, res: NextResponse ) {
    const { id } = await req.json();
    const professional = await prisma.professional.delete({
        where: {
            id
        }
    })
    const user = await prisma.user.delete({
        where: {
            id
        }
    })
    return NextResponse.json("Professional deleted");
}

export async function GET(req: NextRequest, res: NextResponse) {
    const professionals = await prisma.user.findMany({
        where: {
            deleted: true,
            userType: "professional"
        }
    });

    return new NextResponse(JSON.stringify(professionals), { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
    });
}

export async function PATCH(req: NextRequest, res : NextResponse) {
    const { id } = await req.json();
    const user = await prisma.user.update({
        where: {
            id
        },
        data: {
            deleted : true
        }
    })
    return NextResponse.json(user);
}