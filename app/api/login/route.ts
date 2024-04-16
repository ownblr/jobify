import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getSession, login } from "../../actions"

const prisma = new PrismaClient({
});


export async function POST(req: NextRequest, res: NextResponse) {
    const { username, password } = await req.json();
    const user = await prisma.user.findFirst({
        where: {
            username,
            password
        }
    })
    if (!user) { NextResponse.error() }
    if (user?.userType === "professional") {
        const account = await prisma.professional.findFirst({
            where: {
                userId: user.id
            }
        })
        if (!account) { NextResponse.error() }
        if (!account?.approved) { NextResponse.error() }
        const session = await login(user, account);
        console.log(session);
        return NextResponse.json({user, account});
    }
    if (user?.userType === "employer") {
        const account = await prisma.employer.findFirst({
            where: {
                userId: user.id
            }
        })
        if (!account) { NextResponse.error() }
        if (!account?.approved) { NextResponse.error() }
        return NextResponse.json({user, account});
    }
    if (user?.userType === "staff") {
        const account = await prisma.employer.findFirst({
            where: {
                userId: user.id
            }
        })
        if (!account) { NextResponse.error() }

        return NextResponse.json({user, account});
    }
    return NextResponse.error();
}

