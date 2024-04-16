import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({
  log: ["query"],
});

export async function POST(req: NextRequest, res: NextResponse) {
  const password = "123456789!ABC";
  const userType = "employer";

  const {
    username,
    email,
    phoneNumber,
    firstName,
    lastName,
    companyName,
    streetAddress,
    city,
    state,
    zip,
  } = await req.json(); 

  try {
    const result = await prisma.$transaction(async (prisma) => {
      const user = await prisma.user.create({
        data: {
          username,
          email,
          phoneNumber,
          password,
          userType,
          balance: 0,
        },
      });

      const employer = await prisma.employer.create({
        data: {
          id: user.id,
          userId: user.id,
          firstName,
          lastName,
          companyName,
          streetAddress,
          city,
          state,
          zip,
          approved: false,
        },
      });

      return { user, employer };
    });

    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to create user and employer:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to create user and employer" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET(request: NextRequest, response: NextResponse) {
  const data = await prisma.employer.findMany();
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(req: NextRequest, response : NextResponse) {
    const {
        id,
        email,
        phoneNumber,
        companyName,
        firstName,
        lastName,
        streetAddress,
        city,
        state,
        zip,

        
    } = await req.json(); 
  
    try {
        const currentUser = await prisma.user.findUnique({
            where: { id: id },
        });
        const currentEmployer = await prisma.employer.findUnique({
            where: { id: id },
        });
  
        if (!currentUser || !currentEmployer) {
            throw new Error("User or Professional not found");
        }
  
        const result = await prisma.$transaction(async (prisma) => {
            const user = await prisma.user.update({
                where: { id: id },
                data: {
                    email: email || currentUser.email,
                    phoneNumber: phoneNumber || currentUser.phoneNumber,
                },
            });
  
            // Update the employer model with provided or existing values
            const professionalUpdateData = {
                firstName: firstName || currentEmployer.firstName,
                lastName: lastName || currentEmployer.lastName,
                streetAddress: streetAddress || currentEmployer.streetAddress,
                companyName: companyName || currentEmployer.companyName,            
                city: city || currentEmployer.city,
                state: state || currentEmployer.state,
                zip: zip || currentEmployer.zip,
            };
  
            const employer = await prisma.employer.update({
                where: { userId: id },
                data: professionalUpdateData,
            });
  
            return { user , employer }
        });
  
        // Respond with the updated employer profile
        return new NextResponse(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Failed to update employer profile:', error);
        return new NextResponse(JSON.stringify({ error: "Failed to update employer profile" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  }