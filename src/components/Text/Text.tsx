import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type PropsType = {
  component?: "p" | "span";
  size?: "base" | "4xl";
  children: string;
  className?: string;
};

const Text = (props: PropsType) => {
  const { component = "p", size = "base", children, className } = props;

  return React.createElement(
    component,
    {
      className: classNames(styles["text"], styles[`size--${size}`], className),
    },
    children
  );
};

export default Text;
