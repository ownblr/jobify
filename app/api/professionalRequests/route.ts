import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import  EmailTemplate  from '@/app/Components/EmailTemplate/EmailTemplate';
import { Resend } from 'resend'
import { json } from 'stream/consumers';

const resend = new Resend('re_Lfx7NdjW_GKR9MLw6MGH3E9dsQ6wgFCgC')
const prisma = new PrismaClient({
  log: ['query'],
});

export async function GET(req: NextRequest, res : NextResponse) {
    const professionalRequests = await prisma.professional.findMany({
        where: {
            approved : false
        }
    })
    return NextResponse.json(professionalRequests);

}

export async function PATCH(req: NextRequest, res : NextResponse) {
    const { id } = await req.json();
    const user = await prisma.user.findFirst({
        where: {
            id
        }
    })
    if (!user) {
        return NextResponse.error()
    }
    const professional = await prisma.professional.update({
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
        subject: 'professional approved',
        text: '',
        react: EmailTemplate({ firstName: professional.firstName, username: user.username, password: user.password })
    });
    
    return NextResponse.json(professional);
}