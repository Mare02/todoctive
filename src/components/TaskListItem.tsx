import { Task } from "@/models/Task/TaskModel";
export default function TaskListItem(props: { task: Task }) {
  return (
    <li>
      <div>
        <h3>{props.task.name}</h3>
        <p>{props.task.description}</p>
      </div>
    </li>
  );
}