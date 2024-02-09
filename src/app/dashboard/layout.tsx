"use client";

import MenuList from "@/components/sections/MenuList";
import { useSelectedLayoutSegment } from 'next/navigation';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex overflow-hidden dashboard-layout-height">
      <div className="w-72 h-full border-r-2 pt-4">
        <MenuList />
      </div>
      <div className="w-full h-full overflow-y-auto">
        <div className="py-8 bg-white px-6">
          <h1 className="capitalize text-3xl font-medium">{segment || 'dashboard'}</h1>
        </div>
        <div className="px-6">
          {children}
        </div>
      </div>
    </div>
  )
}