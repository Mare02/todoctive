'use client';

import { TasksFormWrapper } from '@/components/wrappers/TasksFormWrapper';
import TasksTable from '@/components/TasksTable';
import SingleTaskForm from '@/components/SingleTaskForm';

export default function TasksList() {
  return (
    <div>
      <TasksFormWrapper>
        {({ tasks, deleteTask, createTask }) => (
          <>
            <div className='mb-10'>
              <SingleTaskForm onSubmit={createTask} />
            </div>

            <TasksTable
              tasks={tasks}
              deleteTask={deleteTask}
              createTask={createTask}
            />
          </>
        )}
      </TasksFormWrapper>
    </div>
  );
}