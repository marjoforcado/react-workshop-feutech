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
              <CheckList key={item.id}>{item.todo}</CheckList>
            ))}
          </div>
        </div>
      </div>
      {/* <Modal /> */}
    </>
  );
};

export default IndexPage;
