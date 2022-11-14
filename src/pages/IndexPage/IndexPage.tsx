import { CheckList } from "../../components";

import styles from "./styles.module.scss";

const IndexPage = () => (
  <div className={styles["page"]}>
    <div>
      <CheckList />
      <CheckList />
      <CheckList />
      <CheckList />
      <CheckList />
    </div>
  </div>
);

export default IndexPage;
