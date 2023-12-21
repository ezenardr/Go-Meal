import PizzaImg from "../../img/pizza.jpg";
import Style from "./productCardWithoutRating.module.css";
type TProductCardWithoutRating = {
  name: string;
  price: number;
  image: string;
  distance: string;
  time: string;
  status: string;
};
export default function ProductCardWithoutRating({
  name = "Peperoni Pizza",
  price = 5.59,
  image = PizzaImg,
  distance = "4.97 km",
  time = "21 min",
  status = "pending",
}: TProductCardWithoutRating) {
  return (
    <div className={Style.card}>
      <p className={`${Style.status} ${status}`}>{status}</p>
      <img src={image} width={180} />
      <div className={Style.info}>
        <p>{name}</p>
        <p>
          <span>$ </span>
          {price}
        </p>
      </div>
      <div className={Style.detailBox}>
        <p>{distance}</p>
        <div className={Style.elipse}></div>
        <p>{time}</p>
      </div>
    </div>
  );
}
