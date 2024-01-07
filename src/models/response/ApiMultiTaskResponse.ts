import { Task } from "@/models/Task/TaskModel"

export type ApiMultiTaskResponse = {
  msg: string,
  data: Task[]
}