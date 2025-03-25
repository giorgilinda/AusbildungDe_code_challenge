import type { FC, PropsWithChildren } from "react";
import { CustomerType } from "../api/customers/route";
import styles from "./Card.module.css";

type CardProps = {
  data: CustomerType;
};

export const Card: FC<PropsWithChildren<CardProps>> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.img} src={data.logo} alt={`${data.name} logo`} />
        <h5 className={styles.name}>{data.name}</h5>
        <div className={styles.button_wrapper}>
          <button type="button" className={styles.button}>
            View details
          </button>
        </div>
      </div>
    </div>
  );
};
