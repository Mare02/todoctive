'use client';

import { TasksFormWrapper } from '@/components/wrappers/TasksFormWrapper';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import TasksTable from '@/components/TasksTable';
import SingleTaskForm from '@/components/SingleTaskForm';

export default function TasksList() {
  return (
    <div>
      <TasksFormWrapper>
        {({ tasks, onDeleteTask, onEditTask, createTask }) => (
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
              onEditTask={onEditTask}
            />
          </>
        )}
      </TasksFormWrapper>
    </div>
  );
}