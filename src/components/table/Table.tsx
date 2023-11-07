import styles from "./Table.module.scss";

const Table = () => {
  const today = new Date();
  const currentYear = today.getFullYear;
  console.log(today);

  // 올해의 총 날짜의 수 반환
  const totalDays = () => {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const startDate = new Date(currentYear, 0, 1).getMilliseconds;
    const endDate = new Date(currentYear, 11, 31).getMilliseconds;

    console.log(endDate - startDate / millisecondsPerDay);
  };

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <td colSpan={3}>whut</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles["filled-box"]} />
            </td>
            <td>
              <div className={styles["filled-box"]} />
            </td>
            <td>
              <div className={styles["filled-box"]} />
            </td>
            <td>
              <div className={styles["empty-box"]} />
            </td>
            <td>
              <div className={styles["empty-box"]} />
            </td>
            <td>
              <div className={styles["filled-box"]} />
            </td>
            <td>
              <div className={styles["empty-box"]} />
            </td>
            <td>
              <div className={styles["filled-box"]} />
            </td>
            <td>
              <div className={styles["filled-box"]} />
            </td>
            <td>
              <div className={styles["filled-box"]} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
