import { prisma } from '../../utils/connect';
import { NextRequest, NextResponse } from 'next/server';

// FETCH ALL subscription
export const GET = async () => {
    try {
        const requests = await prisma.subscription.findMany();
        return new NextResponse(JSON.stringify(requests), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
};
export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const request = await prisma.subscription.create({
            data: body,
        });
        return new NextResponse(JSON.stringify(request), { status: 201 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
};
