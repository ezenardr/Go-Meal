import { Heart, Star } from "lucide-react";
import Style from "./cardItemWithPriceAndRating.module.css";

type CardItemProps = {
  name: string;
  price: number;
  image: string;
  liked: boolean;
  sale: boolean;
  saleAmount: number;
};

export default function CardItemWithPriceAndRating({
  name = "Fish Burger",
  price = 5.59,
  image,
  liked = true,
  sale = true,
  saleAmount = 15,
}: CardItemProps) {
  return (
    <div className={Style.card}>
      {sale && <p className={Style.sale}>{saleAmount}% off</p>}
      {liked ? (
        <Heart className={Style.like} color="#eb5757" fill="#eb5757" />
      ) : (
        <Heart className={Style.like} color="#a098ae" fill="#a098ae" />
      )}

      <img src={image} width={230} height={150} />
      <div>
        <div className={Style.ratings}>
          <Star size={15} color="#f8b602" fill="#f8b602" />
          <Star size={15} color="#f8b602" fill="#f8b602" />
          <Star size={15} color="#f8b602" fill="#f8b602" />
          <Star size={15} color="#f8b602" fill="#f8b602" />
          <Star size={15} color="#f8b602" />
          <Star size={15} color="#f8b602" />
        </div>
        <div className={Style.bottom}>
          <div className={Style.nameAndPrice}>
            <p>{name}</p>
            <p>
              <span>$ </span>
              {price}
            </p>
          </div>
          <div className={Style.add}>+</div>
        </div>
      </div>
    </div>
  );
}
