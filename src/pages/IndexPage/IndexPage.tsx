import React, { useState } from "react";
import { Button, CheckList, Input, Modal } from "../../components";

import styles from "./styles.module.scss";

type Todo = {
  id: number;
  todo: string;
};

const IndexPage = () => {
  const [id, setId] = useState(1);
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [form, setForm] = useState({
    todo: "",
  });
  const [modalProps, setModalProps] = useState<{
    isToggled: boolean;
    todo: Todo | null;
  }>({
    isToggled: false,
    todo: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList((prev: Todo[]) => [
      ...prev,
      {
        id,
        todo: form.todo,
      },
    ]);
    setId((prev) => prev + 1);
  };

  return (
    <>
      <div className={styles["page"]}>
        <div className={styles["page__content"]}>
          <form onSubmit={handleSubmit} className={styles["page__form"]}>
            <Input
              name="todo"
              onChange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
            <Button>Create</Button>
          </form>
          <div className={styles["page__lists"]}>
            {todoList.map((item) => (
              <CheckList
                key={item.id}
                todo={item}
                onView={(todo) =>
                  setModalProps((prev) => ({
                    ...prev,
                    todo,
                  }))
                }
              />
            ))}
          </div>
        </div>
      </div>
      <Modal
        isToggled={modalProps.isToggled}
        todo={modalProps.todo}
        onClose={() => {
          setModalProps((prev) => ({
            ...prev,
            isToggled: false,
            todo: null,
          }));
        }}
        onDelete={(id) => {
          setTodoList((prev) => [...prev.filter((o) => o.id !== id)]);

          setModalProps((prev) => ({
            ...prev,
            isToggled: false,
            todo: null,
          }));
        }}
        onSave={(id, todo) => {
          setTodoList((prev) =>
            prev.map((o) => {
              if (id === o.id) {
                return {
                  id,
                  todo,
                };
              }

              return o;
            })
          );

          setModalProps((prev) => ({
            ...prev,
            isToggled: false,
            todo: null,
          }));
        }}
      />
    </>
  );
};

export default IndexPage;
