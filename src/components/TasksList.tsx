import { Task } from '@/models/Task/TaskModel';
import TaskListItem from './TaskListItem';
import TasksTable from './TasksTable';
import { TaskService } from "@/services/Task/TaskService";
const taskService = new TaskService();

export default async function TasksList() {
  const data: Task[] = await taskService.getAllTasks();
  console.log('zove se ');

  return (
    <div>
      {/* <ul>
        {data.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul> */}
      <TasksTable
        tasks={data}
      ></TasksTable>
    </div>
  );
}