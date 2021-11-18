import React, { useState } from "react";

interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

type ErrorRecord<T> = Partial<Record<keyof T, string>>;
type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

export const useForm = <T extends Record<keyof T, string> = {}>(options: {
  initialValues?: Partial<T>;
  validations?: Validations<T>;
  onSubmit?: () => void;
}) => {
  const [data, setData] = useState<T>((options.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({});

  const handleChange = <S extends unknown>(
    key: string,
    sanitizeFn?: (value: string) => S,
  ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
      setData({
        ...data,
        [key]: value,
      });
    };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const validations = options.validations;

    if (validations) {
      let valid = true;
      const newErrors: ErrorRecord<T> = {};

      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        const pattern = validation?.pattern;

        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;

        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        console.log(errors);
        return { data, handleChange, handleSubmit, errors };
      }
    }

    setErrors({});
    console.log("no err");

    if (options.onSubmit) {
      options.onSubmit();
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  };
};
