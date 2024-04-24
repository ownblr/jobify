//@ts-nocheck

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({
  log: ["query"],
});

export async function POST(req: NextRequest, res: NextResponse) {
    console.log("Creatinng Matches...")
    const { id } = await req.json();
    const professional = await prisma.professional.findFirst({
        where: {
            userId: id
        }
    })

    const jobs = await prisma.job.findMany();

    const professionalQualifications = JSON.parse(professional.qualifications)

    const allProfessionalKeywords = professionalQualifications.map(pQ => pQ.keywords).flat();
    jobs.forEach(async job => {
        
        const jobQualifications = JSON.parse(job.qualifications);
        console.log(jobQualifications)
        console.log(professionalQualifications)
        let matchCount = 0;
        jobQualifications.forEach(jobQ => {
            const jobKeywords = jobQ.keywords;
            jobKeywords.forEach(jK => {
                if (allProfessionalKeywords.includes(jK)) {
                    matchCount++;
                }
            });
        });
        if (matchCount > 3) {
            const currentMatching = JSON.parse(job.matched || "[]");
            const updatedMatching = [...currentMatching, id];  
            const updatedJob = await prisma.job.update({
                where: {
                    id: job.id
                },
                data: {
                    matched: JSON.stringify(updatedMatching)
                }
            });
        }
    });
    return NextResponse.json({ message: "Jobs updated successfully" });
}


