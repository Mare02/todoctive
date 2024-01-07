import { Task } from "@/models/Task/TaskModel"

export type ApiSingleTaskResponse = {
  msg: string,
  data: Task
}