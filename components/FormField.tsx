import React from "react";

export default function FormField({
  id,
  label,
  value,
  type,
  placeholder,
  errorText,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  errorText?: string;
  type?: "text" | "email";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      className={`flex flex-col w-full ${
        errorText ? "text-red" : "text-yellow"
      } focus-within:text-offWhite`}
    >
      <label htmlFor={id} className="font-mono transition-colors duration-300">
        {label}
      </label>
      <input
        type={type ?? "text"}
        id={id}
        placeholder={placeholder}
        value={value}
        autoComplete="true"
        onChange={onChange}
        className={`bg-transparent border-0 border-b-2 ${
          errorText ? "border-red" : "border-yellow"
        } focus:ring-0 focus:border-offWhite transition-colors duration-300 px-0`}
      />
      {errorText ? (
        <span>{errorText}</span>
      ) : (
        <span className="opacity-0 pointer-events-none">E</span>
      )}
    </div>
  );
}
