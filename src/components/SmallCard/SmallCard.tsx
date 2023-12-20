import Style from "./smallCards.module.css";
export default function SmallCard({
  image,
  text,
}: {
  image: string;
  text: string;
}) {
  return (
    <div className={Style.card}>
      <img src={image} />
      <p>{text}</p>
    </div>
  );
}
