import { NextResponse } from "next/server";

// http://locahost:4000/api
export function GET() {
    return NextResponse.json({
        message: 'Next.js API V1.0.0 running...'
    })
}   