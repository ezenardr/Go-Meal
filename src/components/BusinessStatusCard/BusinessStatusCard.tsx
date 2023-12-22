import { useState } from "react";
import Style from "./businessStatusCard.module.css";
export default function BusinessStatusCard() {
  const [businessStatus, setBusinessStatus] = useState<boolean>(true);
  return (
    <div className={Style.card}>
      <div className={Style.top}>
        <p>Yavhe Fast Food</p>
        <div className="checkbox-con">
          <input
            id="checkbox"
            type="checkbox"
            checked={businessStatus}
            onClick={() => setBusinessStatus((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}
