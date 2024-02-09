"use client"

import MenuListItem from '@/components/elements/MenuListItem';
import {
  TableCellsIcon,
  RectangleGroupIcon,
  CogIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const routes = [
  { link: "/dashboard", label: "Dashboard", icon: <TableCellsIcon className='h-5 w-5' /> },
  { link: "/dashboard/tasks", label: "Tasks", icon: <RectangleGroupIcon className='h-5 w-5' /> },
  { link: "/dashboard/settings", label: "Settings", icon: <CogIcon className='h-5 w-5' /> },
  { link: "/dashboard/profile", label: "Profile", icon: <UserIcon className='h-5 w-5' /> },
];

export default function MenuList() {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-1 gap-1 px-3">
      {routes.map((route) => (
        <MenuListItem
          key={route.link}
          link={route.link}
          label={route.label}
          active={pathname === route.link}
          icon={route.icon}
        />
      ))}
    </div>
  )
}