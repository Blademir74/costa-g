import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const type = searchParams.get('type'); // Casa, Depto, etc.

  const where: any = {};

  if (location) {
    where.location = { contains: location, mode: 'insensitive' };
  }
  
  // Price Range Logic
  if (minPrice) {
    where.minPrice = { gte: parseFloat(minPrice) };
  }
  if (maxPrice) {
    where.maxPrice = { lte: parseFloat(maxPrice) };
  }

  // Type filter if applicable in schema
  // if (type) where.type = type;

  try {
    const developments = await prisma.development.findMany({
      where,
      orderBy: { minPrice: 'asc' },
    });
    return NextResponse.json(developments);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching developments' }, { status: 500 });
  }
}