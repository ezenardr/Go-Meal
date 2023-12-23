import { useEffect } from "react";
import Style from "./littleInfoCard.module.css";

type TLittleInfoCard = { amount: number; title: string; color?: string };
export default function LittleInfoCard({
  amount,
  title = "Total",
  color = "#fff8ea",
}: TLittleInfoCard) {
  const fillPercent = amount <= 100 && amount + 80;
  useEffect(function () {
    const root = document.documentElement;
    root.style.setProperty("--change", `${fillPercent + "deg"}`);
  }, []);
  return (
    <>
      {/* <div className={Style.card} style={{ backgroundColor: color }}>
        <p className={Style.icon}>Icon</p>
        <div className={Style.infoBox}>
          <p>{amount}</p>
          <p>{title}</p>
        </div>
      </div> */}
      <div className={Style.card}>
        <div className={Style.circleWrap}>
          <div className={Style.circle}>
            <div className={`${Style.mask} ${Style.full}`}>
              <div
                style={{ backgroundColor: color }}
                className={Style.fill}
              ></div>
            </div>
            <div className={`${Style.mask} ${Style.half}`}>
              <div
                style={{ backgroundColor: color }}
                className={Style.fill}
              ></div>
            </div>
            <div className={Style.insideCircle}>
              {amount}
              <span>{title}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
