import { Button, CheckList, Input, Modal } from "../../components";

import styles from "./styles.module.scss";

const IndexPage = () => (
  <>
    <div className={styles["page"]}>
      <div className={styles["page__content"]}>
        <form className={styles["page__form"]}>
          <Input />
          <Button>Create</Button>
        </form>
        <div className={styles["page__lists"]}>
          <CheckList />
          <CheckList />
          <CheckList />
          <CheckList />
          <CheckList />
          <CheckList />
          <CheckList />
        </div>
      </div>
    </div>
    <Modal />
  </>
);

export default IndexPage;
