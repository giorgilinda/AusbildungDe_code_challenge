import type { FC, PropsWithChildren } from "react";
import styles from "./Indicator.module.css";
import classNames from "classnames";

type IndicatorProps = {
  status: string;
  text?: string;
};

export const Indicator: FC<PropsWithChildren<IndicatorProps>> = ({
  status,
  text,
}) => {
  return (
    <>
      {!text && <span className={classNames(styles.indicator, status)}></span>}
      {text && (
        <span className={classNames(styles.wrapper, status)}>
          <span className={classNames(styles.dot, status)}></span>
          {text}
        </span>
      )}
    </>
  );
};
