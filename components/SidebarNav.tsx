"use client";

import { navigation } from "@/config/navigations";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarNav() {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-2">
      {navigation.map((navItem, i) => (
        <li key={i}>
          <Link
            className={cn(
              "hover:bg-brand-subtle flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-300 ease-in-out",
              pathname === navItem.href &&
                "bg-brand-subtle text-brand font-semibold",
            )}
            href={navItem.href}
          >
            {<navItem.icon className="size-5" />}
            <span>{navItem.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SidebarNav;
