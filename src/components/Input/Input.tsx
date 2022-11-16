import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

type PropsType = {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
};

const Input = (props: PropsType) => {
  const { className, ...rest } = props;

  return (
    <input
      placeholder="What to do?"
      className={classNames(styles["input"], className)}
      {...rest}
    />
  );
};

export default Input;
