// ITaskService.ts
import { Task } from '@/models/Task/TaskModel';
import IEditTask from '@/interfaces/Task/IEditTask';

export default interface ITaskService {
  getAllTasks(): Promise<Task[]>;

  getTaskById(taskId: string): Promise<Task>;

  createTask(newTaskData: IEditTask): Promise<Task>;

  editTask(newTaskData: IEditTask): Promise<Task>;

  deleteTask(taskId: string): Promise<{ msg: string }>;
}