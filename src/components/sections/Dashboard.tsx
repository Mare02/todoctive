"use client";

import { TasksFormWrapper } from '@/components/wrappers/TasksFormWrapper';
import TasksTable from '@/components/TasksTable';
import SingleTaskForm from '@/components/SingleTaskForm';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function TasksList() {
  return (
    <div>
      <TasksFormWrapper>
        {({ tasks, onDeleteTask, onEditTask, createTask }) => (
          <>
            <Card className='mb-10'>
              <CardHeader>
                <CardTitle>Create task</CardTitle>
              </CardHeader>
              <CardContent>
                <SingleTaskForm onCreateSubmit={createTask} />
              </CardContent>
            </Card>

            {
              Boolean(tasks.length) &&
              <TasksTable
                tasks={tasks}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
              />
            }
          </>
        )}
      </TasksFormWrapper>
    </div>
  );
}