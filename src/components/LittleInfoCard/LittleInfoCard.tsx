import Style from "./littleInfoCard.module.css";

type TLittleInfoCard = { amount: number; title: string; color?: string };
export default function LittleInfoCard({
  amount = 75,
  title = "Total",
  color = "#fff8ea",
}: TLittleInfoCard) {
  return (
    <div className={Style.card} style={{ backgroundColor: color }}>
      <p className={Style.icon}>Icon</p>
      <div className={Style.infoBox}>
        <p>{amount}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}
