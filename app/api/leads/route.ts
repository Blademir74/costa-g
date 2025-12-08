import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { createHubSpotContact } from '../../../lib/hubspot';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      project,        // Can be null if coming from contact form
      serviceType,    // Main differentiator
      message,
      budget,         // New field
      location        // New field (if available)
    } = body;

    // 1. Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Determine context for local DB
    const leadContext = project || serviceType || 'Contacto General';

    // 2. Save to Local Database (PostgreSQL via Prisma)
    // We try/catch this specifically to ensure we don't block HubSpot if DB fails, or vice versa depending on priority.
    // Ideally transactional, but for now sequential.
    let savedLead;
    try {
      savedLead = await prisma.lead.create({
        data: {
          name,
          email,
          phone,
          project: leadContext,
          status: 'NUEVO',
          // Assuming the schema has a JSON or text field for extra details, 
          // otherwise these might be lost if not in schema. 
          // For now we assume standard fields.
        },
      });
    } catch (dbError) {
      console.error('Database Error:', dbError);
      return NextResponse.json({ error: 'Failed to save lead to database' }, { status: 500 });
    }

    // 3. Sync with HubSpot CRM
    const hubSpotResult = await createHubSpotContact({
      name,
      email,
      phone,
      projectInterest: serviceType,
      budget,
      location: location || message, // Use message as fallback for location context if not explicit
      message
    });

    return NextResponse.json({ 
      success: true, 
      data: savedLead, 
      hubspot: hubSpotResult 
    }, { status: 201 });

  } catch (error) {
    console.error('Lead creation global error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}