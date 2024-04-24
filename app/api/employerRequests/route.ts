//@ts-nocheck

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import  EmailTemplate  from '@/app/Components/EmailTemplate/EmailTemplate';
import { Resend } from 'resend'

const resend = new Resend('re_Lfx7NdjW_GKR9MLw6MGH3E9dsQ6wgFCgC')
const prisma = new PrismaClient({
  log: ['query'],
});

export async function GET(req: NextRequest, res : NextResponse) {
    const employerRequests = await prisma.employer.findMany({
        where: {
            approved : false
        }
    })
    return NextResponse.json(employerRequests);
}

export async function POST(req: NextRequest, res : NextResponse) {
    const { id } = await req.json();
    const user = await prisma.user.findFirst({
        where: {
            id
        }
    })
    if (!user) {
        return NextResponse.error()
    }
    const employer = await prisma.employer.update({
        where: {
            id
        },
        data: {
            approved: true
        }
    })
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'scgrady@smu.edu',
        subject: 'employer approved',
        text: '',
        react: EmailTemplate({ firstName: employer.firstName, username: user.username, password: user.password })
    });
    return NextResponse.json(employer);
}