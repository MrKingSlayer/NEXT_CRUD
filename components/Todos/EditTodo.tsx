"use client";

import { useState } from "react";
import Button from "../Button";
import { MdEdit } from "react-icons/md";
import Form from "../Form";
import Input from "../Input";
import { ITodo } from "@/types";
import { editTodoAction } from "@/actions";

const EditTodo = ({ todo }: { todo: ITodo }) => {
  const [editTodo, setEditTodo] = useState<boolean>(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(!editTodo);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<MdEdit />} actionButton></Button>
      {editTodo && (
        <Form action={editTodoAction}>
          <Input value={todo.id} name="todoId" type="hidden"></Input>
          <div className="flex justify-center ">
            <Input
              name="newTitle"
              placeholder="Edit Todo..."
              type="text"
            ></Input>
            <Button type="submit" text="save"></Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default EditTodo;
