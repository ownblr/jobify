//@ts-nocheck

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient({
  log: ['query'],
});

export async function POST(req: NextRequest, res : NextResponse) {


  const password = "123456789!ABC"
  const userType = "professional"
  
  const {
    username,
    email,
    phoneNumber,
    firstName,
    lastName,
    degreeName,
    institutionName,
    monthComplete,
    yearComplete,
    streetAddress,
    city,
    state,
    zip,
    qualifications
  } = await req.json(); 
  const monthInt = parseInt(monthComplete)
  const yearInt = parseInt(yearComplete)
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
      
      const qualifcationsString = JSON.stringify(qualifications)
      console.log(qualifcationsString)
      const professional = await prisma.professional.create({
        data: {
          id : user.id,
          userId: user.id,
          firstName,
          lastName,
          degreeName,
          institutionName,
          monthComplete : monthInt,
          yearComplete : yearInt,
          streetAddress,
          city,
          state,
          zip,
          qualifications : qualifcationsString,
          approved: false,
          matching: false
        },
      });

      return { user, professional };
    });

    return new NextResponse(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Failed to create user and professional:', error);
    return new NextResponse(JSON.stringify({ error: "Failed to create user and professional" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}



export async function GET(req: NextRequest, response: NextResponse) {
  const data = await prisma.professional.findMany();
  console.log(JSON.stringify(data))
  return NextResponse.json(data);
}

export async function PATCH(req: NextRequest, response : NextResponse) {
  const {
      id,
      email,
      phoneNumber,
      firstName,
      lastName,
      degreeName,
      institutionName,
      monthComplete,
      yearComplete,
      streetAddress,
      city,
      state,
      zip,
      qualifications,
      
  } = await req.json(); 
  const qualifcationsString = JSON.stringify(qualifications)

  try {
      const currentUser = await prisma.user.findUnique({
          where: { id: id },
      });
      const currentProfessional = await prisma.professional.findUnique({
          where: { id: id },
      });

      // Check if the currentUser and currentProfessional were successfully retrieved
      if (!currentUser || !currentProfessional) {
          throw new Error("User or Professional not found");
      }

      // Begin a transaction to update the professional's profile
      const result = await prisma.$transaction(async (prisma) => {
          // Update the User model if necessary, with provided or existing values
          const user = await prisma.user.update({
              where: { id: id },
              data: {
                  email: email || currentUser.email,
                  phoneNumber: phoneNumber || currentUser.phoneNumber,
              },
          });

          // Update the Professional model with provided or existing values
          const professionalUpdateData = {
              firstName: firstName || currentProfessional.firstName,
              lastName: lastName || currentProfessional.lastName,
              degreeName: degreeName || currentProfessional.degreeName,
              institutionName: institutionName || currentProfessional.institutionName,
              monthComplete: monthComplete || currentProfessional.monthComplete,
              yearComplete: yearComplete || currentProfessional.yearComplete,
              streetAddress: streetAddress || currentProfessional.streetAddress,
              city: city || currentProfessional.city,
              state: state || currentProfessional.state,
              zip: zip || currentProfessional.zip,
              qualifications: qualifcationsString || currentProfessional.qualifications,
          };

          const professional = await prisma.professional.update({
              where: { userId: id },
              data: professionalUpdateData,
          });

          return { user , professional }
      });

      // Respond with the updated professional profile
      return new NextResponse(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
      console.error('Failed to update professional profile:', error);
      return new NextResponse(JSON.stringify({ error: "Failed to update professional profile" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}