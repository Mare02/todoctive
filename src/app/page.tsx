import TasksList from "@/components/TasksList"

export default function homePage() {
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-4xl font-semibold'>Dashboard</h1>
      </div>

      <TasksList />
    </div>
  )
}