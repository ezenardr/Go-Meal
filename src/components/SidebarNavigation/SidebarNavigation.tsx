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
import { useEffect, useState } from "react";
import Style from "./sidebarNavigation.module.css";
import { NavLink } from "react-router-dom";
export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  function toogleSticky() {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  useEffect(function () {
    document.addEventListener("scroll", toogleSticky);
    return () => document.removeEventListener("scroll", toogleSticky);
  });
  return (
    <>
      <div className={`${Style.menu} ${sticky && Style.sticky}`}>
        {isOpen ? (
          <X
            size={32}
            className={Style.iconBtn}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <AlignJustify
            size={32}
            className={Style.iconBtn}
            onClick={() => setIsOpen(true)}
          />
        )}
        <h1 className={Style.logo}>
          GoMeal<span>.</span>
        </h1>
        <nav
          className={`${Style.responsiveNav} ${isOpen ? Style.isOpen : ""} `}
        >
          <ul className={Style.navList}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? Style.active : ""} ${Style.linkBox} `
                }
              >
                <LayoutDashboard className={Style.icon} />
                <p className={Style.navLink}>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/orders"}
                className={({ isActive }) =>
                  `${isActive ? Style.active : ""} ${Style.linkBox} `
                }
              >
                <ScrollText className={Style.icon} />
                <p className={Style.navLink}>Commandes</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/history"}
                className={({ isActive }) =>
                  `${isActive ? Style.active : ""} ${Style.linkBox} `
                }
              >
                <TimerReset className={Style.icon} />
                <p className={Style.navLink}>Historiques</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/statistics"}
                className={({ isActive }) =>
                  `${isActive ? Style.active : ""} ${Style.linkBox} `
                }
              >
                <BarChart3 className={Style.icon} />
                <p className={Style.navLink}>Statistiques</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/messages"}
                className={({ isActive }) =>
                  `${isActive ? Style.active : ""} ${Style.linkBox} `
                }
              >
                <Mails className={Style.icon} />
                <p className={Style.navLink}>Messages</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/account"}
                className={({ isActive }) =>
                  `${isActive ? Style.active : ""} ${Style.linkBox} `
                }
              >
                <CircleUserRound className={Style.icon} />
                <p className={Style.navLink}>Compte</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/settings"}
                className={({ isActive }) =>
                  `${isActive ? Style.active : ""} ${Style.linkBox} `
                }
              >
                <Settings2 className={Style.icon} />
                <p className={Style.navLink}>Paramètres</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <nav className={`${Style.nav}`}>
        <h1 className={Style.logo}>
          GoMeal<span>.</span>
        </h1>
        <ul className={Style.navList}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? Style.active : ""} ${Style.linkBox} `
              }
            >
              <LayoutDashboard className={Style.icon} />
              <p className={Style.navLink}>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/orders"}
              className={({ isActive }) =>
                `${isActive ? Style.active : ""} ${Style.linkBox} `
              }
            >
              <ScrollText className={Style.icon} />
              <p className={Style.navLink}>Commandes</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/history"}
              className={({ isActive }) =>
                `${isActive ? Style.active : ""} ${Style.linkBox} `
              }
            >
              <TimerReset className={Style.icon} />
              <p className={Style.navLink}>Historiques</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) =>
                `${isActive ? Style.active : ""} ${Style.linkBox} `
              }
            >
              <BarChart3 className={Style.icon} />
              <p className={Style.navLink}>Statistiques</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/messages"}
              className={({ isActive }) =>
                `${isActive ? Style.active : ""} ${Style.linkBox} `
              }
            >
              <Mails className={Style.icon} />
              <p className={Style.navLink}>Messages</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/account"}
              className={({ isActive }) =>
                `${isActive ? Style.active : ""} ${Style.linkBox} `
              }
            >
              <CircleUserRound className={Style.icon} />
              <p className={Style.navLink}>Compte</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/settings"}
              className={({ isActive }) =>
                `${isActive ? Style.active : ""} ${Style.linkBox} `
              }
            >
              <Settings2 className={Style.icon} />
              <p className={Style.navLink}>Paramètres</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
