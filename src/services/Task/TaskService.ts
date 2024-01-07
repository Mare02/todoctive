// TaskService.ts
import { Task } from '@/models/Task/TaskModel';
import ITaskService from '@/services/Task/ITaskService';
import IEditTask from '@/interfaces/Task/IEditTask';
import { baseUrl } from '@/utils/useBaseUrl';

export class TaskService implements ITaskService {
  async getAllTasks(): Promise<Task[]> {
    try {
      const response = await fetch(`${baseUrl}/api/tasks`);
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
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


  deleteTask(taskId: string): void {

  }
}