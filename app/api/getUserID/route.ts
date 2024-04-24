//@ts-nocheck

import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '../../actions';

export async function GET(req: NextRequest, res: NextResponse) {
    const session = await getSession();
    const userId = session.user.id
    return NextResponse.json(userId);
}