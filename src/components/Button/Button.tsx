import styles from "./styles.module.scss";

type PropsType = { children: string; onClick?: () => void };

const Button = (props: PropsType) => {
  const { children, onClick = () => {} } = props;

  return (
    <button className={styles["btn"]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
