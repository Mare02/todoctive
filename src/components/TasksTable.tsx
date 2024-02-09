"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import IEditTask from '@/interfaces/Task/IEditTask';
import { Task } from '@/models/Task/TaskModel';

interface TaskTableProps {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onEditTask: (taskData: IEditTask) => void;
}

export default function TasksTable(props: TaskTableProps) {
  return (
    <>
      <h3 className='text-2xl font-semibold mb-2'>Your tasks</h3>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableRow>
            <TableHead>NAME</TableHead>
            <TableHead>DESCRIPTION</TableHead>
            <TableHead>FINISHED</TableHead>
            <TableHead>ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.tasks?.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>
                {task.finished ? (
                  <CheckCircleIcon className='w-8 h-8 text-green-600'></CheckCircleIcon>
                ) : (
                  <XCircleIcon className='w-8 h-8 text-red-500'></XCircleIcon>
                )}
              </TableCell>
              <TableCell className='flex gap-2'>
                <Button
                  onClick={() => {
                    props.onEditTask({
                      taskId: task.id,
                      name: task.name,
                      description: task.description,
                      finished: task.finished
                    })
                  }}
                >Edit</Button>
                <Button
                  color="danger"
                  onClick={() => {props.onDeleteTask(task.id);}}
                >Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}