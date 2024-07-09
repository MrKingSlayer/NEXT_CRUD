"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const value = formData.get("input") as string;
  if (!value.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: value,
    },
  });

  revalidatePath("/");
}

export async function changeStatus(formData: FormData) {
  const value = formData.get("changeTodo") as string;

  const todo = await prisma.todo.findUnique({
    where: {
      id: value,
    },
  });

  const updateStatus = !todo?.isCompleted;

  await prisma.todo.update({
    where: {
      id: value,
    },
    data: {
      isCompleted: updateStatus,
    },
  });

  revalidatePath("/");
}

export async function editTodoAction(formData: FormData) {
  const value = formData.get("newTitle") as string;
  const todoId = formData.get("todoId") as string;

  await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      title: value,
    },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const value = formData.get("todoId") as string;

  await prisma.todo.delete({
    where: {
      id: value,
    },
  });

  revalidatePath("/");
}
