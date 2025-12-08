import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sector = searchParams.get('sector');
  const location = searchParams.get('location');
  const year = searchParams.get('year');

  const whereClause: Prisma.ProjectWhereInput = {};

  if (sector && sector !== 'Todos') {
    whereClause.sector = sector as any;
  }
  if (location && location !== 'Todas') {
    whereClause.location = { contains: location, mode: 'insensitive' };
  }
  if (year && year !== 'Todos') {
    whereClause.year = parseInt(year);
  }

  try {
    const projects = await prisma.project.findMany({
      where: whereClause,
      orderBy: { year: 'desc' },
    });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 });
  }
}