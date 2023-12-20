import {
  CircleUserRound,
  LayoutDashboard,
  Mails,
  ScrollText,
  Settings2,
  TimerReset,
} from "lucide-react";
import Style from "./sidebarNavigation.module.css";
export default function SidebarNavigation() {
  return (
    <nav className={Style.nav}>
      <h1 className={Style.logo}>
        GoMeal<span>.</span>
      </h1>
      <ul className={Style.navList}>
        <li className={`${Style.linkBox} ${Style.active}`}>
          <LayoutDashboard className={Style.icon} />
          <p className={Style.navLink}>Dashboard</p>
        </li>
        <li className={Style.linkBox}>
          <ScrollText className={Style.icon} />
          <p className={Style.navLink}>Commandes</p>
        </li>
        <li className={Style.linkBox}>
          <TimerReset className={Style.icon} />
          <p className={Style.navLink}>Historique</p>
        </li>
        <li className={Style.linkBox}>
          <Mails className={Style.icon} />
          <p className={Style.navLink}>Messages</p>
        </li>
        <li className={Style.linkBox}>
          <CircleUserRound className={Style.icon} />
          <p className={Style.navLink}>Compte</p>
        </li>
        <li className={Style.linkBox}>
          <Settings2 className={Style.icon} />
          <p className={Style.navLink}>Paramètres</p>
        </li>
      </ul>
    </nav>
  );
}
