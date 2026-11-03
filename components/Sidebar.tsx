import Logo from "./Logo";
import SidebarNav from "./SidebarNav";
import SidebarLogout from "./SidebarLogout";

function Sidebar() {
  return (
    <nav className="hidden h-full flex-col gap-8 lg:flex">
      <Logo />

      <SidebarNav />

      <SidebarLogout />
    </nav>
  );
}

export default Sidebar;
