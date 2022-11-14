import { useState } from "react";
import Text from "../Text";
import styles from "./styles.module.scss";

const CheckList = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <button
      className={styles["list"]}
      onClick={() => setToggle((prev) => !prev)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={styles["list__svg"]}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, sunt.
      </Text>
    </button>
  );
};

export default CheckList;
