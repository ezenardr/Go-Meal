import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";
import Style from "./layouts.module.css";

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={Style.layout}>
      <SidebarNavigation />
      {children}
    </div>
  );
}
export function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={Style.globalLayout}>
      <SidebarNavigation />
      {children}
    </div>
  );
}
export function MainContainer({ children }: { children: React.ReactNode }) {
  return <main className={Style.main}>{children}</main>;
}
export function SimpleDivContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={Style.divContainer}>{children}</div>;
}
