'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './NavLink.module.css';

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link href={href} className={pathname.startsWith(href) ? classes.active : classes.link}>
      {children}
    </Link>
  );
}
