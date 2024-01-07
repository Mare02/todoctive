// TaskService.ts
import { Task } from '@/models/Task/TaskModel';
import { ApiMultiTaskResponse } from '@/models/response/ApiMultiTaskResponse';
import { ApiSingleTaskResponse } from '@/models/response/ApiSingleTaskResponse';
import { ApiMessageResponse } from '@/models/response/ApiMessageResponse';
import ITaskService from '@/services/Task/ITaskService';
import IEditTask from '@/interfaces/Task/IEditTask';
import ICreateTask from '@/interfaces/Task/ICreateTask';

export class TaskService implements ITaskService {
  async getAllTasks(): Promise<ApiMultiTaskResponse> {
    const response = await fetch(`/api/tasks`);
    return await response.json()
  }

  async getTaskById(taskId: string): Promise<ApiSingleTaskResponse> {
    const mockTask: Task = {
      id: '1',
      name: 'Mock Task',
      description: 'This is a mock task',
      finished: false,
      createdAt: new Date(),
    };
    return {msg: 'test', data: mockTask};
  }

  async createTask(newTaskData: ICreateTask): Promise<ApiSingleTaskResponse> {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newTaskData.name,
          description: newTaskData.description
        }),
      });
      return await response.json();
    } catch (error) {
      throw new Error("Failed to get data: " + (error as Error).message);
    }
  }

  async editTask(newTaskData: IEditTask): Promise<ApiSingleTaskResponse> {
    try {
      const response = await fetch(`/api/tasks/${newTaskData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTaskData),
      });

      return await response.json();
    } catch (error) {
      throw new Error("Failed to delete task: " + (error as Error).message);
    }
  }


  async deleteTask(taskId: string): Promise<ApiMessageResponse> {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      throw new Error("Failed to delete task: " + (error as Error).message);
    }
  }
}