'use client';

import { useState } from 'react';
import { ITasksWrapperChildProps } from '@/interfaces/Task/ITasksWrapperChildProps';
import {Table, Button, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { ConfirmModal } from '@/components/ConfirmModal';

export default function TasksTable(props: ITasksWrapperChildProps) {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState('');

  return (
    <>
      <h3 className='text-2xl font-semibold mb-2'>Your tasks</h3>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>DESCRIPTION</TableColumn>
          <TableColumn>FINISHED</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {props.tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.finished.toString()}</TableCell>
              <TableCell className='flex gap-2'>
                <Button>Edit</Button>
                <Button
                  color="danger"
                  onPress={() => {
                    setIsConfirmModalOpen(true);
                    setDeleteTaskId(task.id);
                  }}
                >Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isConfirmModalOpen && (
        <ConfirmModal
          message="Are you sure you want to delete this task?"
          title="Delete task"
          isOpen={isConfirmModalOpen}
          onCancel={() => {
            setIsConfirmModalOpen(false);
            setDeleteTaskId('');
          }}
          onConfirm={() => {
            props.deleteTask(deleteTaskId)
            setDeleteTaskId('');
            setIsConfirmModalOpen(false);
          }}
        />
      )}
    </>
  )
}