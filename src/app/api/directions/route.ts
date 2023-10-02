import { prisma } from '../../utils/connect';
import { NextRequest, NextResponse } from 'next/server';

// FETCH ALL directions
export const GET = async () => {
    try {
        const requests = await prisma.direction.findMany();
        return new NextResponse(JSON.stringify(requests), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
};
export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const request = await prisma.direction.create({
            data: body,
        });
        return new NextResponse(JSON.stringify(request), { status: 201 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
};
