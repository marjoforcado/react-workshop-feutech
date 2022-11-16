import { useState } from "react";
import classNames from "classnames";

import Button from "../Button";
import styles from "./styles.module.scss";
import Input from "../Input";

const Modal = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
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
        {isEditing ? (
          <form
            onSubmit={(e) => e.preventDefault()}
            className={styles["modal__form"]}
          >
            <div className={classNames(styles["modal__body"])}>
              <Input className={styles["modal__input"]} />
            </div>
            <div className={styles["modal__footer--is-editing"]}>
              <Button onClick={() => setIsEditing((prev) => false)}>
                Cancel
              </Button>
              <Button>Save</Button>
            </div>
          </form>
        ) : (
          <>
            <div className={classNames(styles["modal__body"])}>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                reprehenderit voluptatibus sed aut odio earum, dolore fugit,
                omnis velit necessitatibus sequi porro, deserunt sapiente. Esse,
                eaque! Eveniet impedit eius iure!
              </div>
            </div>
            <div className={styles["modal__footer"]}>
              <Button>Delete</Button>
              <div className={styles["modal__btn-group"]}>
                <Button onClick={() => setIsEditing((prev) => true)}>
                  Edit
                </Button>
                <Button>Close</Button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles["modal__backdrop"]}></div>
    </>
  );
};

export default Modal;
