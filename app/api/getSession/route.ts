import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '../../actions';

export async function GET(req: NextRequest, res: NextResponse) {
    const session = await getSession();
    console.log(session)
    return NextResponse.json(session);
    
}