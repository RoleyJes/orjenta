import {
  BriefcaseBusiness,
  HomeIcon,
  ListTodo,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";
import { routes } from "./routes";

type NavigationItem = {
  label: string;
  icon: LucideIcon;
  href: string;
};

export const navigation: NavigationItem[] = [
  {
    label: "Overview",
    icon: HomeIcon,
    href: routes.dashboard,
  },
  {
    label: "Clients",
    icon: Users,
    href: routes.clients,
  },
  {
    label: "Projects",
    icon: BriefcaseBusiness,
    href: routes.projects,
  },
  {
    label: "Tasks",
    icon: ListTodo,
    href: routes.tasks,
  },
  {
    label: "Settings",
    icon: Settings,
    href: routes.settings,
  },
];
