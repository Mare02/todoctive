import Link from 'next/link';

export default function homePage() {
  return (
    <div>
      {/* <div className='text-center mb-10 mt-8'>
        <h1 className='text-4xl font-semibold'>Home Page</h1>
      </div> */}
      <Link href='/dashboard'>Dashboard</Link>
    </div>
  )
}