import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { parse } from "path";

const prisma = new PrismaClient({
  log: ["query"],
});
export async function GET(req: NextRequest, res: NextResponse) {
    const jobs = await prisma.job.findMany();
    return NextResponse.json(jobs);
}

export async function POST(req: NextRequest, res: NextResponse) {
    const { employerId, companyName, positionName, contactFirstName, contactLastName, contactPhone, contactEmail, startDate, endDate, startTime, endTime, payment, qualifications, employer } = await req.json();
    
    const qualifcationsString = JSON.stringify(qualifications)
    const job = await prisma.job.create({
        data: {
            employerId,
            positionName,
            companyName,
            contactFirstName,
            contactLastName,
            contactPhone,
            contactEmail,
            startDate,
            endDate,
            startTime,
            endTime,
            payment,
            qualifications : qualifcationsString
        }
    })
    return NextResponse.json(job);
}

export async function PATCH(req : NextRequest, res : NextResponse ) {
    const { id, userId } = await req.json();
    const job = await prisma.job.findUnique({
        where: {
            id
        }
    })
    if (!job) {
        return new NextResponse(JSON.stringify({ error: "Job not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
    }
    const currentMatching = JSON.parse(job.matched || "[]")
    const updatedMatching = [...currentMatching, userId]
    const updatedJob = await prisma.job.update({
        where: {
            id
        },
        data: {
            matched: JSON.stringify(updatedMatching)
        }
    })
    return NextResponse.json(updatedJob);
}