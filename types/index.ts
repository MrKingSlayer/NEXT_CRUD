import { ReactNode } from "react";

export interface IInputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

export interface IForm {
  children: ReactNode;
  action: (formData: FormData) => void;
  className?: string;
  onSubmit?: () => void;
}

export interface IButton {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
}

export interface ITodo {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}
