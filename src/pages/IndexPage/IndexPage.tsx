import { Button, CheckList, Input } from "../../components";

import styles from "./styles.module.scss";

const IndexPage = () => (
  <div className={styles["page"]}>
    <form className={styles["page__form"]}>
      <Input />
      <Button>Add</Button>
    </form>
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
