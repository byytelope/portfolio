import React from "react";

export default function FormField({
  id,
  name,
  label,
  value,
  type,
  errorText,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
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
      <div className="relative">
        <input
          type={type ?? "text"}
          id={id}
          name={name}
          placeholder="E"
          value={value}
          autoComplete="true"
          onChange={onChange}
          className={`peer w-full bg-transparent placeholder-transparent border-0 border-b-2 ${
            errorText ? "border-red" : "border-yellow"
          } focus:ring-0 focus:border-offWhite transition-colors duration-300 px-0`}
        />
        <label
          htmlFor={id}
          className="font-mono transition-all duration-300 absolute left-0 -top-5 peer-placeholder-shown:top-2 peer-focus:-top-5"
        >
          {label}
        </label>
      </div>
      {errorText ? (
        <span className="transition-all duration-300">{errorText}</span>
      ) : (
        <span className="opacity-0 pointer-events-none">E</span>
      )}
    </div>
  );
}
