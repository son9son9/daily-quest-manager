import logo from "../../assets/daily-quest-logo.png";
import styles from "./Header.module.scss";

function Header() {
  return (
    <nav className={styles.container}>
      <div className={styles["logo-title"]}>
        <img src={logo} width={48} height={48} />
        <h2>Daily Quester</h2>
      </div>
      <div className={styles.login}>
        <h2>Log in</h2>
      </div>
    </nav>
  );
}

export default Header;
