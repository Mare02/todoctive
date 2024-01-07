import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/services/db/prismaSingleton';

export async function DELETE(req: NextRequest, { params }: { params: { taskId: string } }) {
  try {
    await prisma.tasks.delete({
      where: {
        id: +params.taskId,
      },
    });

    return NextResponse.json({ msg: 'Task deleted successfully'});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { taskId: string },
    body: { name: string, description: string, finished: boolean }}
) {
  try {
    const taskId = params.taskId;
    const { name, description, finished } = await req.json();

    const updatedTask = await prisma.tasks.update({
      where: {
        id: +taskId,
      },
      data: {
        name,
        description,
        finished,
      },
    });

    return NextResponse.json({ msg: 'Task updated successfully', data: updatedTask });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
  }
}