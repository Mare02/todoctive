import { DELETE, PUT } from '@/app/api/tasks/[taskId]/route';
import { GET, POST } from '@/app/api/tasks/route'; // Replace with the actual path
import prisma from '@/services/db/prismaSingleton';
import { NextRequest } from 'next/server';


const findManyMock = prisma.tasks.findMany as jest.Mock;
const createMock = prisma.tasks.create as jest.Mock;
const deleteMock = prisma.tasks.delete as jest.Mock;
const updateMock = prisma.tasks.update as jest.Mock;

// Mocking prisma operations
jest.mock('@/services/db/prismaSingleton', () => ({
  tasks: {
    findMany: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
  },
}));

// Mocking NextResponse.json
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data) => data),
  },
}));

describe('/api/tasks', () => {
  describe('GET', () => {
    it('should-return-all-tasks', async () => {
      const mockTasks = [{ id: 1, name: 'Task 1', description: 'Description 1' }];
      findManyMock.mockResolvedValue(mockTasks);

      const response = await GET();

      expect(prisma.tasks.findMany).toHaveBeenCalled();
      expect(response).toEqual({ msg: 'Tasks retrieved successfully', data: mockTasks });
    });
  });

  describe('POST', () => {
    it('should-create-task', async () => {
      const mockTask = { name: 'New Task', description: 'New Description' };
      createMock.mockResolvedValue(mockTask);

      const mockReq = {
        json: jest.fn().mockResolvedValue(mockTask),
      } as unknown as Request;

      const response = await POST(mockReq);

      expect(createMock).toHaveBeenCalledWith({
        data: mockTask,
      });
      expect(response).toEqual({ msg: 'Task created successfully', data: mockTask });
    });
  });

  describe('DELETE', () => {
    it('should-delete-task', async () => {
      const mockTaskId = '1';
      deleteMock.mockResolvedValue({});

      const mockReq = {
        params: { taskId: mockTaskId },
      } as unknown as NextRequest;

      const response = await DELETE(mockReq, { params: { taskId: mockTaskId } });

      expect(deleteMock).toHaveBeenCalledWith({
        where: { id: +mockTaskId },
      });
      expect(response).toEqual({ msg: 'Task deleted successfully' });
    });
  });
});


describe('PUT', () => {
  it('should-update-task', async () => {
    const newTaskData = {
      name: 'New Task',
      description: 'New Description',
      finished: false,
    };

    const mockTask = { id: 1, ...newTaskData };
    createMock.mockResolvedValue(mockTask);

    const editTaskData = {
      name: 'Edit task name',
      description: 'Edit task description',
      finished: true,
    }
    const updatedTask = { id: 1, ...editTaskData };
    updateMock.mockResolvedValue(updatedTask);

    const mockReq = {
      json: jest.fn().mockResolvedValue(editTaskData),
    } as unknown as NextRequest;

    const response = await PUT(mockReq, { params: { taskId: '1' }, body: editTaskData});

    expect(mockReq.json).toHaveBeenCalled();
    expect(updateMock).toHaveBeenCalledWith({
      where: { id: 1 },
      data: editTaskData,
    });
    expect(response).toEqual({ msg: 'Task updated successfully', data: updatedTask });
  });
})