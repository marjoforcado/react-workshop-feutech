import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type PropsType = {
  component?: "p" | "span";
  children: string;
  className?: string;
};

const Text = (props: PropsType) => {
  const { component = "p", children, className } = props;

  return React.createElement(
    component,
    {
      className: classNames(styles["text"], className),
    },
    children
  );
};

export default Text;
