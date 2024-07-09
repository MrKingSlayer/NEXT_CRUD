"use client";

import { IForm } from "@/types";
import { useRef } from "react";

const Form = ({ children, action, onSubmit, className }: IForm) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
      className={className}
      onSubmit={onSubmit}
      ref={ref}
    >
      {children}
    </form>
  );
};

export default Form;
