import Brand from "../Brand";
import styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={styles["navbar"]}>
    <Brand />
  </nav>
);

export default Navbar;
