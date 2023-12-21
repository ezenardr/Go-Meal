import CardItemWithPriceAndRating from "../../components/CardItemWithPriceAndRating/CardItemWithPriceAndRating";
import SectionWithItemList from "../../components/SectionWithItemList/SectionWithItemList";
import SmallCard from "../../components/SmallCard/SmallCard";
import Burger from "../../img/burger.svg";
import BurgerImg from "../../img/burger-img.webp";
import PizzaImg from "../../img/pizza.jpg";
import Style from "./home.module.css";
import Layout, { MainContainer } from "../../components/Layout/Layout";
import ProductCardWithoutRating from "../../components/ProductCardWithoutRating/ProductCardWithoutRating";

export default function Home() {
  return (
    <Layout>
      <MainContainer>
        <SectionWithItemList title="Categorie">
          <li>
            <SmallCard text="Burger" image={Burger} />
          </li>
          <li>
            <SmallCard text="Burger" image={Burger} />
          </li>
          <li>
            <SmallCard text="Burger" image={Burger} />
          </li>
          <li>
            <SmallCard text="Burger" image={Burger} />
          </li>
          <li>
            <SmallCard text="Burger" image={Burger} />
          </li>
          <li>
            <SmallCard text="Burger" image={Burger} />
          </li>
        </SectionWithItemList>
        <SectionWithItemList title="Les plus demandés">
          <CardItemWithPriceAndRating
            liked={true}
            name="Burger Fromage"
            price={28.99}
            sale={true}
            saleAmount={7}
            image={BurgerImg}
          />
          <CardItemWithPriceAndRating
            liked={false}
            name="Burger Fromage"
            price={28.99}
            sale={true}
            saleAmount={7}
            image={BurgerImg}
          />
          <CardItemWithPriceAndRating
            liked={true}
            name="Burger Fromage"
            price={28.99}
            sale={false}
            saleAmount={7}
            image={BurgerImg}
          />
          <CardItemWithPriceAndRating
            liked={true}
            name="Burger Fromage"
            price={28.99}
            sale={true}
            saleAmount={7}
            image={BurgerImg}
          />
          <CardItemWithPriceAndRating
            liked={true}
            name="Burger Fromage"
            price={28.99}
            sale={true}
            saleAmount={7}
            image={BurgerImg}
          />
          <CardItemWithPriceAndRating
            liked={true}
            name="Burger Fromage"
            price={28.99}
            sale={true}
            saleAmount={7}
            image={BurgerImg}
          />
        </SectionWithItemList>
        <SectionWithItemList title="Commandes Récentes">
          <ProductCardWithoutRating
            name="Pizza Fromage"
            image={PizzaImg}
            distance="4.97 km"
            price={6.77}
            status="pending"
            time="22 min"
          />
          <ProductCardWithoutRating
            name="Pizza Fromage"
            image={PizzaImg}
            distance="4.97 km"
            price={6.77}
            status="ready"
            time="22 min"
          />
          <ProductCardWithoutRating
            name="Pizza Fromage"
            image={PizzaImg}
            distance="4.97 km"
            price={6.77}
            status="delivered"
            time="22 min"
          />
          <ProductCardWithoutRating
            name="Pizza Fromage"
            image={PizzaImg}
            distance="4.97 km"
            price={6.77}
            status="error"
            time="22 min"
          />
        </SectionWithItemList>
      </MainContainer>
      <aside>aside</aside>
    </Layout>
  );
}
