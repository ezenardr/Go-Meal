import {
  AlignJustify,
  BarChart3,
  CircleUserRound,
  LayoutDashboard,
  Mails,
  ScrollText,
  Settings2,
  TimerReset,
  X,
} from "lucide-react";
import { useState } from "react";
import Style from "./sidebarNavigation.module.css";
export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      <div className={Style.menu}>
        {isOpen ? (
          <X
            size={32}
            className={Style.icon}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <AlignJustify
            size={32}
            className={Style.icon}
            onClick={() => setIsOpen(true)}
          />
        )}
        <h1 className={Style.responsiveLogo}>
          GoMeal<span>.</span>
        </h1>
      </div>
      <nav className={`${Style.nav} ${isOpen ? Style.isOpen : ""}`}>
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
            <BarChart3 className={Style.icon} />
            <p className={Style.navLink}>Statistiques</p>
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
    </>
  );
}
