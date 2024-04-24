import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({
});

export async function POST(req: NextRequest, res: NextResponse) {
    const { id } = await req.json();
    const jobs = await prisma.job.findMany();

    
    const matchedJobs = jobs.filter(job => {
        return JSON.parse(job.matched || "[]").includes(id)
    })
    return new NextResponse(JSON.stringify(matchedJobs), { status: 200, headers: { 'Content-Type': 'application/json' } });

}