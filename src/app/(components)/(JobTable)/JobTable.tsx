import type { FC, PropsWithChildren } from "react";
import styles from "./JobTable.module.css";
import { JobType } from "@/utils/CustomersUtils";
import { Indicator } from "../(Indicator)/Indicator";
import classNames from "classnames";
import { useJobContext } from "@/hooks/useJobContext";
import { useRouter } from "next/navigation";

type JobTableProps = {
  postings: JobType[];
};

export const JobTable: FC<PropsWithChildren<JobTableProps>> = ({
  postings,
}) => {
  const { saveJob } = useJobContext();
  const router = useRouter();
  const buttonClickHandler = (job: JobType) => {
    saveJob(job);
    router.push(`${job.customer}/job`);
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th scope="col" className={styles.cell}>
              Status
            </th>
            <th scope="col" className={styles.cell}>
              Name
            </th>
            <th scope="col" className={styles.cell}>
              Salary
            </th>
            <th scope="col" className={styles.cell}></th>
          </tr>
        </thead>
        <tbody>
          {postings.map((job, key) => (
            <tr key={key} className={styles.tr}>
              <td className={classNames(styles.cell, styles.status_cell)}>
                <Indicator status={job.status} text={job.status} />
              </td>
              <td className={styles.cell}>{job.name}</td>
              <td className={styles.cell}>{job.salary}</td>
              <td className={styles.cell}>
                <button type="button" onClick={() => buttonClickHandler(job)}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
