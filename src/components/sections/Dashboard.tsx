'use client';

import { TasksFormWrapper } from '@/components/wrappers/TasksFormWrapper';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import TasksTable from '@/components/TasksTable';
import SingleTaskForm from '@/components/SingleTaskForm';

export default function TasksList() {
  return (
    <div>
      <TasksFormWrapper>
        {({ tasks, onDeleteTask, onEditTask, createTask, editTask }) => (
          <>
            <Card className='mb-10'>
              <CardHeader>Create task</CardHeader>
              <CardBody>
                <SingleTaskForm onCreateSubmit={createTask} />
              </CardBody>
            </Card>

            <TasksTable
              tasks={tasks}
              onDeleteTask={onDeleteTask}
              createTask={createTask}
              onEditTask={onEditTask}
              editTask={editTask}
            />
          </>
        )}
      </TasksFormWrapper>
    </div>
  );
}