import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    // Reuse Lead model or a specific Subscriber model if defined
    // Here we treat it as a Lead with specific status/project
    const subscriber = await prisma.lead.create({
      data: {
        email,
        name: 'Subscriber', // Default placeholder
        project: 'Newsletter',
        status: 'SUSCRITO',
        phone: '', // Optional or empty if schema allows
        fecha: new Date(),
      }
    });

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }
}