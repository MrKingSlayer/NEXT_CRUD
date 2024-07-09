import React from "react";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import { ITodo } from "@/types";
import { FaCheck } from "react-icons/fa";
import { changeStatus } from "@/actions";

const ChangeTodo = ({ todo }: { todo: ITodo }) => {
  return (
    <Form action={changeStatus}>
      <Input name="changeTodo" value={todo.id} type="hidden"></Input>
      <Button
        text={<FaCheck />}
        actionButton
        type="submit"
        bgColor={todo.isCompleted ? "bg-green-400" : "bg-blue-500"}
      ></Button>
    </Form>
  );
};

export default ChangeTodo;
