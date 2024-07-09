import { createTodo } from "@/actions";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

const AddTodo = () => {
  return (
    <div>
      <Form action={createTodo}>
        <div className="flex gap-2">
          <Input name="input" type="text" placeholder="Add Todo Here..." />
          <Button type="submit" text="Add" bgColor="text-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
