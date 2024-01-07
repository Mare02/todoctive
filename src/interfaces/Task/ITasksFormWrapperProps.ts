import { Task } from '@/models/Task/TaskModel';

export interface ITasksFormWrapperProps {
  tasks: Task[];
  deleteTask: (taskId: string) => void;
  createTask: (name: string, description: string) => void;
};