import { useEffect } from "react";
import Style from "./littleInfoCard.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type TLittleInfoCard = { amount: number; title: string; color?: string };
export default function LittleInfoCard({
  amount = 120,
  title = "Total",
  color = "#fff8ea",
}: TLittleInfoCard) {
  return (
    <div className={Style.card}>
      <CircularProgressbar
        styles={buildStyles({
          pathColor: color,
          trailColor: "transparent",
        })}
        value={amount}
        text={`${amount}%`}
      />
    </div>
  );
}
