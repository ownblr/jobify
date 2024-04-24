//@ts-nocheck

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import  EmailTemplate  from '@/app/Components/EmailTemplate/EmailTemplate';
import { Resend } from 'resend'

const resend = new Resend('re_Lfx7NdjW_GKR9MLw6MGH3E9dsQ6wgFCgC')
const prisma = new PrismaClient({
  log: ["query"],
});

export async function POST(req: NextRequest, res : NextResponse) {
    const { username, email, firstName, lastName, phoneNumber } = await req.json();

    const password = "123456789!ABC"
    const userType = "staff"

    const user = await prisma.user.create({
        data: {
            username,
            email,
            phoneNumber,
            password,
            userType,
            balance: 0,
        }
    })
    const staff = await prisma.staff.create({
        data: {
            id : user.id,
            userId: user.id,
            firstName,
            lastName,
            email,
            phoneNumber,
        }
    })
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'scgrady@smu.edu',
        subject: 'Staff Account Created',
        text: '',
        react: EmailTemplate({ firstName: staff.firstName, username: user.username, password: user.password })
    });
    return NextResponse.json(staff);
}

export async function GET(req: NextRequest, res: NextResponse) {
    const staff = await prisma.staff.findMany();
    return NextResponse.json(staff);
}

export async function PATCH(req: NextRequest, res: NextResponse) {
    const { id, email, phoneNumber } = await req.json();
    const staff = await prisma.staff.update({
        where: {
            id
        },
        data: {
            email,
            phoneNumber
        }
    });
    return NextResponse.json(staff);
}