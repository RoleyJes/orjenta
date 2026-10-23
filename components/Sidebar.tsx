import Logo from "./Logo";
import SidebarNav from "./SidebarNav";

function Sidebar() {
  return (
    <nav className="hidden flex-col gap-8 lg:flex">
      <Logo />

      <SidebarNav />
    </nav>
  );
}

export default Sidebar;
