'use client';

import { useState, useEffect, ReactNode, FC } from 'react';
import { Task } from '@/models/Task/TaskModel';
import { ITasksFormWrapperProps } from '@/interfaces/Task/ITasksFormWrapperProps';
import { TaskService } from "@/services/Task/TaskService";
const taskService = new TaskService();

type TasksWrapperProps = {
  children: (arg: ITasksFormWrapperProps) => ReactNode;
};

export const TasksFormWrapper: FC<TasksWrapperProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    taskService.getAllTasks()
      .then((res) => {
        setTasks(res.data);
        console.log(res);
      })
      .catch(error => console.error(error));
  }, []);

  const deleteTask = (taskId: string) => {
    taskService.deleteTask(taskId)
      .then(res => {
        console.log(res);
        setTasks(tasks.filter(task => task.id !== taskId));
      })
      .catch(error => console.error(error));
  }

  const createTask = (name: string, description: string) => {
    taskService.createTask({ name, description })
      .then(res => {
        console.log(res);
        setTasks(prevTasks => [...prevTasks, res.data]);
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      {children({
        tasks,
        deleteTask,
        createTask,
      })}
    </>
  );
}