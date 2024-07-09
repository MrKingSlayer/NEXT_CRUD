import { IInputProps } from "@/types";

const Input = ({ name, type, placeholder, value }: IInputProps) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className="block w-full p-4 mx-2 border rounded-lg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
      />
    </div>
  );
};

export default Input;
