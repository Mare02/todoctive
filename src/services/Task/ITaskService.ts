// ITaskService.ts
import IEditTask from '@/interfaces/Task/IEditTask';
import ICreateTask from '@/interfaces/Task/ICreateTask';
import { ApiMultiTaskResponse } from '@/models/response/ApiMultiTaskResponse';
import { ApiSingleTaskResponse } from '@/models/response/ApiSingleTaskResponse';
import { ApiMessageResponse } from '@/models/response/ApiMessageResponse';

export default interface ITaskService {
  getAllTasks(): Promise<ApiMultiTaskResponse>;

  getTaskById(taskId: string): Promise<ApiSingleTaskResponse>;

  createTask(newTaskData: ICreateTask): Promise<ApiSingleTaskResponse | void>;

  editTask(newTaskData: IEditTask): Promise<ApiSingleTaskResponse>;

  deleteTask(taskId: string): Promise<ApiMessageResponse>;
}