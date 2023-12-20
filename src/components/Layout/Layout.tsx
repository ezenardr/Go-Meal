import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";
import Style from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={Style.layout}>
      <SidebarNavigation />
      {children}
      {/* <MainContainer>{children}</MainContainer> */}
    </div>
  );
}
export function MainContainer({ children }: { children: React.ReactNode }) {
  return <main className={Style.main}>{children}</main>;
}
