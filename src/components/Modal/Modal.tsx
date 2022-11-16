import { useEffect, useState } from "react";
import classNames from "classnames";

import Button from "../Button";
import styles from "./styles.module.scss";
import Input from "../Input";
import Text from "../Text";

type Todo = {
  id: number;
  todo: string;
};

type PropsType = {
  isToggled?: boolean;
  todo?: Todo | null;
  onClose: () => void;
  onDelete: (id: number) => void;
  onSave: (id: number, todo: string) => void;
};

const Modal = (props: PropsType) => {
  const { isToggled, todo, onClose, onDelete, onSave } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState<{ todo: string | "" }>({
    todo: "",
  });

  useEffect(() => {
    setForm({
      todo: todo?.todo || "",
    });
  }, [todo]);

  if (todo) {
    return (
      <>
        <div className={styles["modal"]}>
          <div className={styles["modal__header"]}>
            <button onClick={() => onClose()}>
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
                <Text>Current value: {todo.todo}</Text>
                <Input
                  name="todo"
                  className={styles["modal__input"]}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
              <div className={styles["modal__footer--is-editing"]}>
                <Button onClick={() => setIsEditing(false)}>Cancel</Button>
                <Button
                  onClick={() => {
                    onSave(todo.id, form.todo);
                    setIsEditing(false);
                  }}
                >
                  Save
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div className={classNames(styles["modal__body"])}>
                {todo.todo}
              </div>
              <div className={styles["modal__footer"]}>
                <Button onClick={() => onDelete(todo.id)}>Delete</Button>
                <div className={styles["modal__btn-group"]}>
                  <Button onClick={() => setIsEditing(true)}>Edit</Button>
                  <Button onClick={() => onClose()}>Close</Button>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          className={classNames(styles["modal__backdrop"], {
            [styles["modal__backdrop--is-toggled"]]: isToggled,
          })}
        ></div>
      </>
    );
  }

  return <></>;
};

export default Modal;
