import Dashboard from "@/components/sections/Dashboard"

export default function homePage() {
  return (
    <div>
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-semibold'>Dashboard</h1>
      </div>

      <Dashboard />
    </div>
  )
}