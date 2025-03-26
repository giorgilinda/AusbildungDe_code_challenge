import type { FC, PropsWithChildren } from "react";
import styles from "./CardDetails.module.css";
import Image from "next/image";
import { Indicator } from "./Indicator";

type CardDetailsProps = {
  data: {
    name: string;
    description: string;
    status: string;
    details: {
      label: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: any;
    }[];
    logo?: string;
  };
};

export const CardDetails: FC<PropsWithChildren<CardDetailsProps>> = ({
  data,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{data.name}</h2>
      {data.logo && (
        <Image
          className={styles.img}
          src={`${data.logo}?w=400q=75`}
          alt={`${data.name} logo`}
          width={96}
          height={96}
        />
      )}
      <p className={styles.description}>{data.description}</p>

      <dl className={styles.details_list}>
        {data.details.map((detail, key) => (
          <div key={key} className={styles.detail_wrapper}>
            <dt className={styles.detail_title}>{detail.label}</dt>
            <dd className={styles.detail_text}>{detail.value}</dd>
          </div>
        ))}
        <div className={styles.detail_wrapper}>
          <dt className={styles.detail_title}>Status</dt>
          <dd className={styles.detail_text}>
            <div className={styles.status_wrapper}>
              <Indicator status={data.status} text={data.status} />
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
};
