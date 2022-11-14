import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type PropsType = {
  component?: "p" | "span";
  size?: "base" | "4xl";
  children: string;
  weight?: "normal" | "semibold";
  className?: string;
};

const Text = (props: PropsType) => {
  const {
    component = "p",
    size = "base",
    weight = "normal",
    children,
    className,
  } = props;

  return React.createElement(
    component,
    {
      className: classNames(
        styles["text"],
        styles[`size--${size}`],
        styles[`weight--${weight}`],
        className
      ),
    },
    children
  );
};

export default Text;
