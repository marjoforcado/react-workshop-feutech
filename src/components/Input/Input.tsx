import classNames from "classnames";
import styles from "./styles.module.scss";

type PropsType = {
  className?: string;
};

const Input = (props: PropsType) => {
  const { className } = props;

  return (
    <input
      placeholder="What to do?"
      className={classNames(styles["input"], className)}
    />
  );
};

export default Input;
