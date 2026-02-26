import { NextResponse } from "next/server";

type Inquiry = {
  id: string;
  createdAt: string;
  payload: unknown;
};

const inquiryStore: Inquiry[] = [];

function createReference() {
  const stamp = Date.now().toString().slice(-6);
  const rand = Math.floor(Math.random() * 900 + 100);
  return `AWR-${stamp}-${rand}`;
}

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const reference = createReference();

    inquiryStore.push({
      id: reference,
      createdAt: new Date().toISOString(),
      payload,
    });

    return NextResponse.json({
      reference,
      message: "Our reservations team will contact you shortly with availability options.",
    });
  } catch {
    return NextResponse.json({ message: "Invalid inquiry payload." }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ count: inquiryStore.length, inquiries: inquiryStore.slice(-20) });
}

