import Button from "../Button";
import styles from "./styles.module.scss";

const Modal = () => (
  <>
    <div className={styles["modal"]}>
      <div className={styles["modal__header"]}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={styles["modal__body"]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis alias
        molestiae aspernatur at, possimus sapiente esse sunt quo eligendi
        facilis fuga incidunt ipsa quidem, labore rem nobis ipsum. Aut, facilis.
      </div>
      <div className={styles["modal__footer"]}>
        <Button>Close</Button>
      </div>
    </div>
    <div className={styles["modal__backdrop"]}></div>
  </>
);

export default Modal;
