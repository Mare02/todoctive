'use client';

import { TaskService } from "@/services/Task/TaskService";
import { useState, useEffect, ReactNode, FC } from 'react';
import { Task } from '@/models/Task/TaskModel';
import { ITasksFormWrapperProps } from '@/interfaces/Task/ITasksFormWrapperProps';
import Modal from '@/components/Modal';
import SingleTaskForm from '@/components/SingleTaskForm';
import IEditTask from "@/interfaces/Task/IEditTask";
import ICreateTask from "@/interfaces/Task/ICreateTask";

type TasksWrapperProps = {
  children: (arg: ITasksFormWrapperProps) => ReactNode;
};

export const TasksFormWrapper: FC<TasksWrapperProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState('');
  const [taskToEdit, setTaskToEdit] = useState<IEditTask | null>(null);
  // const [editTaskName, setEditTaskName] = useState('');
  // const [editTaskDescrition, setEditTaskDescrition] = useState('');

  const taskService = new TaskService();

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

  const onDeleteTask = (taskId: string) => {
    setIsConfirmModalOpen(true);
    setDeleteTaskId(taskId);
  }

  const onEditTask = (taskData: IEditTask) => {
    setIsEditModalOpen(true);
    setTaskToEdit(taskData);
  }

  const editTask = (newTaskData: IEditTask) => {
    taskService.editTask(newTaskData)
      .then(res => {
        setTasks(prevTasks => prevTasks.map(task => task.id === newTaskData.taskId ? {...task, ...res.data} : task));
        setIsEditModalOpen(false);
      })
  }

  const createTask = (createTaskData: ICreateTask) => {
    taskService.createTask(createTaskData)
      .then(res => {
        setTasks(prevTasks => [...prevTasks, res.data]);
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      {children({
        tasks,
        onDeleteTask,
        onEditTask,
        createTask,
        editTask,
      })}

      <Modal
        message="Are you sure you want to delete this task?"
        title="Delete task"
        confirmText="Delete"
        isOpen={isConfirmModalOpen}
        onCancel={() => {
          setIsConfirmModalOpen(false);
          setDeleteTaskId('');
        }}
        onConfirm={() => {
          deleteTask(deleteTaskId)
          setIsConfirmModalOpen(false);
          setDeleteTaskId('');
        }}
      />

      <Modal
        message=""
        title="Edit task"
        confirmText="Save"
        isOpen={isEditModalOpen}
        onCancel={() => {
          setIsEditModalOpen(false);
        }}
        onConfirm={() => {
          taskToEdit && editTask(taskToEdit);
        }}
      >
        <SingleTaskForm
          task={taskToEdit}
          hideSubmit={true}
          onEditSubmit={editTask}
          onChange={(data) => {
            setTaskToEdit(data);
          }}
        >
        </SingleTaskForm>
      </Modal>
    </>
  );
}