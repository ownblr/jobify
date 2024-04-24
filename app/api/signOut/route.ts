//@ts-nocheck

import { NextRequest, NextResponse } from 'next/server';
import { logout, getSession} from '../../actions';

export async function GET(req: NextRequest, res: NextResponse) {
    await logout();
    const session = await getSession();
    return NextResponse.json(session);
}