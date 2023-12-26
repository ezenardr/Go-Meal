import { GlobalLayout, MainContainer } from "../../components/Layout/Layouts";
import Style from "./orders.module.css";

export default function Orders() {
  return (
    <GlobalLayout>
      <MainContainer>
        <div className={Style.topBar}>
          <div className={Style.barLeft}>
            <h4>15 Commandes</h4>
          </div>
          <p>Date</p>
        </div>
        <div className={Style.statusBar}>
          <p className={Style.active}>Tout</p>
          <p>En Attente</p>
          <p>Pret</p>
          <p>Delivrées</p>
          <p>Annulées</p>
        </div>
        <table className={Style.table}>
          <tr className={Style.tableHead}>
            <th>#</th>
            <th>Order ID</th>
            <th>Plats</th>
            <th>Adresse</th>
            <th>Prix</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>1</td>
            <td>12err-245gy-h88u54</td>
            <td>Pizza Peperonni + Burger fromage</td>
            <td>88, rue du peuple</td>
            <td>$ 42.99</td>
            <td>
              <p className={`${Style.status} pending`}>En Attente</p>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>12err-245gy-h88u5412err-245gy-h88u5412err-245gy-h88u54</td>
            <td>Pizza Peperonni + Burger fromage</td>
            <td>88, rue du peuple</td>
            <td>$ 42.99</td>
            <td>
              <p className={`${Style.status} ready`}>Pret</p>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>12err-245gy-h88u5412err-245gy-h88u5412err-245gy-h88u54</td>
            <td>Pizza Peperonni + Burger fromage</td>
            <td>88, rue du peuple</td>
            <td>$ 42.99</td>
            <td>
              <p className={`${Style.status} delivered`}>Delivrée</p>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>12err-245gy-h88u5412err-245gy-h88u5412err-245gy-h88u54</td>
            <td>Pizza Peperonni + Burger fromage</td>
            <td>88, rue du peuple</td>
            <td>$ 42.99</td>
            <td>
              <p className={`${Style.status} error`}>Annulée</p>
            </td>
          </tr>
        </table>
      </MainContainer>
    </GlobalLayout>
  );
}
