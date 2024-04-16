import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient({
  log: ['query'],
});

export async function GET(req: NextRequest, res : NextResponse) {
    const professionals = await prisma.professional.findMany({
        where: {
            matching : true
        }
    })
    if (!professionals) {
        return new NextResponse(JSON.stringify({ error: "Professionals not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
    }
    return NextResponse.json(professionals);
}

export async function PATCH(req: NextRequest, res : NextResponse) {
    const { id } = await req.json();
    const professional = await prisma.professional.findUnique({
        where: {
            id
        }
    })
    if(!professional) {
        return new NextResponse(JSON.stringify({ error: "Professional not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
    }
    const currentMatching = professional.matching

    const updatedProfessional = await prisma.professional.update({
        where: {
            id
        },
        data: {
            matching: !currentMatching
        }
    })
    return NextResponse.json(updatedProfessional);
}

