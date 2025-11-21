"use client";
import { useActionState, useEffect, useRef } from "react";

import {
  LockKeyholeIcon,
  type LockKeyholeIconHandle,
} from "@/components/icons/lock-keyhole-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Message } from "@/components/ui/message";
import { Select } from "@/components/ui/select";
import { revalidateData } from "@/lib/actions";
import { CacheTags } from "@/lib/types";

export default function AdminPage() {
  const iconRef = useRef<LockKeyholeIconHandle>(null);
  const [formState, formAction, isPending] = useActionState(revalidateData, {
    msg: "Enter password to revalidate data",
    status: 0,
  });
  const formIsValid = formState.status === 200 || formState.status === 0;

  useEffect(() => {
    if (formState.status === 200) {
      iconRef.current?.startAnimation();
    } else {
      iconRef.current?.stopAnimation();
    }
  }, [formState.status]);

  return (
    <main className="flex flex-col w-full sm:max-w-3/7 lg:max-w-2/7 min-h-screen gap-4 justify-center items-center">
      <div className="flex flex-col gap-2 w-full items-start">
        <LockKeyholeIcon
          size={22}
          ref={iconRef}
          className={`${formIsValid ? "text-inherit" : "text-red-900 dark:text-red-200"}`}
        />
        <Message variant={formIsValid ? "normal" : "error"}>
          {formState.msg}
        </Message>
      </div>

      <form
        id="admin-form"
        action={formAction}
        className="flex flex-col gap-4 justify-center items-start w-full"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="tag" className="flex items-center gap-2 w-full py-1">
            <span>{"Tag"}</span>
          </label>

          <Select id="tag" name="tag" className="w-full">
            <option value=""></option>
            {Object.entries(CacheTags).map(([key, tag]) => (
              <option key={key} value={tag.tag}>
                {tag.title}
              </option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="password"
            className="flex items-center gap-2 w-full py-1"
          >
            <span>{"Password"}</span>
          </label>

          <Input
            id="password"
            name="password"
            type="password"
            className="w-full"
          />
        </div>

        <Button
          form="admin-form"
          type="submit"
          title="Submit"
          disabled={isPending}
        />
      </form>
    </main>
  );
}
