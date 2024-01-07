'use client'

import { useState } from 'react';
import { Task } from '@/models/Task/TaskModel';
import {Table, Button, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function TasksTable(props: {tasks: Task[]}) {
  const [tasks, setTasks] = useState(props.tasks);

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>DESCRIPTION</TableColumn>
        <TableColumn>FINISHED</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.name}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.finished.toString()}</TableCell>
            <TableCell className='flex gap-2'>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}