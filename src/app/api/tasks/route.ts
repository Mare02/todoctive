import { NextResponse } from 'next/server';
import prisma from '@/services/db/prismaSingleton';

export async function GET() {
  try {
    const tasks = await prisma.tasks.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    // Retrieve the task details from the request body
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
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}