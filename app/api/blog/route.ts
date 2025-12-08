import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '6');
  const skip = (page - 1) * limit;

  try {
    const [posts, total] = await prisma.blogPost.findManyAndCount({
      skip,
      take: limit,
      orderBy: { publishDate: 'desc' }, // Assuming publishDate field exists mapping to 'fecha_publicacion'
    });

    return NextResponse.json({
      data: posts,
      meta: {
        total,
        page,
        last_page: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching blog posts' }, { status: 500 });
  }
}