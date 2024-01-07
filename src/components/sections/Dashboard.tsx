'use client';

import { TasksWrapper } from '@/components/wrappers/TasksForm';
import TasksTable from '@/components/TasksTable';

export default function TasksList() {
  return (
    <div>
      <TasksWrapper>
        {({ tasks, deleteTask }) => (
          <TasksTable
            tasks={tasks}
            deleteTask={deleteTask}
          />
        )}
      </TasksWrapper>
    </div>
  );
}