import Link from 'next/link';
import { ReactNode } from 'react';

interface MenuListItemProps {
  link: string,
  label: string,
  icon?: ReactNode,
  active?: Boolean,
}

export default function menuListItem(props: MenuListItemProps) {
  return (
    <Link
      href={props.link}
      className={
        `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100
        ${props.active ? 'bg-gray-100' : ''}`
      }
    >
      {props.icon} {props.label}
    </Link>
  )
}