import React from "react";

export default function FormField({
  id,
  label,
  type,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col w-full text-yellow focus-within:text-offWhite">
      <label htmlFor={id} className="font-mono transition-colors duration-300">
        {label}
      </label>
      <input
        type={type ?? "text"}
        id={id}
        placeholder={placeholder}
        autoComplete="true"
        onChange={onChange}
        className="bg-transparent border-0 border-b-2 border-yellow focus:ring-0 focus:border-offWhite transition-colors duration-300 px-0"
      />
    </div>
  );
}
