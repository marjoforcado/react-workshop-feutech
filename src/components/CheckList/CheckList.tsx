import { useState } from "react";
import classNames from "classnames";

import Text from "../Text";
import styles from "./styles.module.scss";

type Todo = {
  id: number;
  todo: string;
};

type PropsType = {
  todo: Todo;
  onView: (todo: Todo) => void;
};

const CheckList = (props: PropsType) => {
  const { todo, onView } = props;
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      className={classNames(styles["checklist"], {
        [styles["checklist--is-done"]]: isDone,
      })}
    >
      <div
        className={styles["checklist__content"]}
        onClick={() => setIsDone((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={classNames(styles["checklist__svg"])}
        >
          <path
            fillRule="evenodd"
            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
            clipRule="evenodd"
          />
        </svg>
        <Text>{todo.todo}</Text>
      </div>
      <button className={styles["checklist__btn"]} onClick={() => onView(todo)}>
        View
      </button>
    </div>
  );
};

export default CheckList;
