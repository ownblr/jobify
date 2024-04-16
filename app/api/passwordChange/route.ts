import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient({
  log: ['query'],
});

export async function PATCH(req: NextRequest, res: NextResponse) {
    const { id, newPassword } = await req.json();
    const user = await prisma.user.update({
        where: {
            id
        },
        data: {
            password: newPassword
        }
    })
    return NextResponse.json(user);
}
