'use client';

import { useState, useEffect, ReactNode, FC } from 'react';
import { Task } from '@/models/Task/TaskModel';
import { ITasksWrapperChildProps } from '@/interfaces/Task/ITasksWrapperChildProps';
import { TaskService } from "@/services/Task/TaskService";
const taskService = new TaskService();

type TasksWrapperProps = {
  children: (arg: ITasksWrapperChildProps) => ReactNode;
};

export const TasksWrapper: FC<TasksWrapperProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    taskService.getAllTasks()
      .then((res) => {
        setTasks(res);
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

  // const createTask = (name: string, description: string, finished: boolean) => {
  //   taskService.createTask({ name, description, finished })
  //     .then(res => {
  //       console.log(res);
  //       setTasks([...tasks, res]);
  //     })
  //     .catch(error => console.error(error));
  // }

  return (
    <>
      {children({
        tasks,
        deleteTask,
      })}
    </>
  );
}