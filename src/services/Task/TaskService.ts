// TaskService.ts
import { Task } from '@/models/Task/TaskModel';
import ITaskService from '@/services/Task/ITaskService';
import IEditTask from '@/interfaces/Task/IEditTask';

export class TaskService implements ITaskService {
  async getAllTasks(): Promise<Task[]> {
    try {
      const response = await fetch(`/api/tasks`);
      return response.json();
    } catch (error) {
      throw new Error("Failed to get data: " + (error as Error).message);
    }
  }

  async getTaskById(taskId: string): Promise<Task> {
    const mockTask: Task = {
      id: '1',
      name: 'Mock Task',
      description: 'This is a mock task',
      finished: false,
      createdAt: new Date(),
    };
    return mockTask;
  }

  async createTask(newTaskData: IEditTask): Promise<Task> {
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

      return response.json();
    } catch (error) {
      throw new Error("Failed to get data: " + (error as Error).message);
    }
  }

  async editTask(newTaskData: IEditTask): Promise<Task> {
    const mockTask: Task = {
      id: '2',
      name: newTaskData.name,
      description: newTaskData.description,
      finished: newTaskData.finished,
      createdAt: new Date(),
    };
    return mockTask;
  }


  async deleteTask(taskId: string): Promise<{ msg: string; }> {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      return response.json();
    } catch (error) {
      throw new Error("Failed to delete task: " + (error as Error).message);
    }
  }
}