import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todos";
import { prisma } from "@/utils/prisma";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">Todo App</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        <span className="lowercase">Crud / Server Action</span>
      </h1>

      <div className="flex justify-center flex-col items-center">
        {/* Add Todo */}
        <AddTodo />
        {/* Todos */}
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((todo, id) => (
            <div key={id} className="w-full">
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
