import type { FC, PropsWithChildren } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { Indicator } from "../(Indicator)/Indicator";
import { CustomerType } from "@/utils/CustomersUtils";

type CardProps = {
  data: CustomerType;
  buttonClickHandler: (id: string) => void;
};

export const Card: FC<PropsWithChildren<CardProps>> = ({
  data,
  buttonClickHandler,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Indicator status={data.customer_status} text={data.customer_status} />
        <Image
          className={styles.img}
          src={`${data.logo}?w=400q=75`}
          alt={`${data.name} logo`}
          width={96}
          height={96}
        />
        <h5 className={styles.name}>{data.name}</h5>
        <div className={styles.button_wrapper}>
          <button
            data-testid="customerDetailsButton"
            type="button"
            onClick={() => buttonClickHandler(data.id)}
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
};
