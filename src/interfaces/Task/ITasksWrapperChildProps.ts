import { Task } from '@/models/Task/TaskModel';

export interface ITasksWrapperChildProps {
  tasks: Task[];
  deleteTask: (taskId: string) => void;
};