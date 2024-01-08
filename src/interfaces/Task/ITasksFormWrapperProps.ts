import { Task } from '@/models/Task/TaskModel';
import ICreateTask from '@/interfaces/Task/ICreateTask';
import IEditTask from '@/interfaces/Task/IEditTask';

export interface ITasksFormWrapperProps {
  tasks: Task[];
  createTask: (createTaskData: ICreateTask) => void;
  editTask: (editTaskData: IEditTask) => void;
  onDeleteTask: (taskId: string) => void;
  onEditTask: (taskData: IEditTask) => void;
};