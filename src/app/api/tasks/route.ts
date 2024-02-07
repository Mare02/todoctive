import { NextResponse } from 'next/server';
import prisma from '@/services/db/prismaSingleton';
import { handleApiError } from '@/utils/apiError';

export async function GET() {
  try {
    const tasks = await prisma.tasks.findMany();
    return NextResponse.json({ msg: 'Tasks retrieved successfully', data: tasks });
  } catch (error) {
    console.error(error);
    handleApiError(error);
  }
}

export async function POST(req: Request) {
  try {
    const { name, description } = await req.json();
    const newTask = await prisma.tasks.create({
      data: {
        name,
        description,
      },
    });

    return NextResponse.json({ msg: 'Task created successfully', data: newTask });

  } catch (error) {
    console.error(error);
    handleApiError(error);
  }
}