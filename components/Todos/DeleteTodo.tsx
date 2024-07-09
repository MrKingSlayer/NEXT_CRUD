import { ITodo } from "@/types";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import { FaTrash } from "react-icons/fa";
import { deleteTodo } from "@/actions";

const DeleteTodo = ({ todo }: { todo: ITodo }) => {
  return (
    <Form action={deleteTodo}>
      <Input name="todoId" value={todo.id} type="hidden"></Input>
      <Button
        text={<FaTrash />}
        actionButton
        type="submit"
        bgColor="bg-red-400"
      ></Button>
    </Form>
  );
};

export default DeleteTodo;
