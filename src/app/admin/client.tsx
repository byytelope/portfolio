"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";

import type { RefreshIconHandle } from "@/components/icons/refresh-icon";

import { RefreshIcon } from "@/components/icons/refresh-icon";
import { Button } from "@/components/ui/button";
import { Message } from "@/components/ui/message";
import { Select } from "@/components/ui/select";
import { revalidateAction } from "@/lib/auth/actions";
import { CacheTags } from "@/lib/types";

export default function AdminClient() {
  const router = useRouter();
  const iconRef = useRef<RefreshIconHandle>(null);
  const [formState, formAction, isPending] = useActionState(revalidateAction, {
    msg: "Select tag to revalidate cache",
    status: 0,
  });
  const formIsValid = formState.status === 200 || formState.status === 0;
  const [logoutStatus, setLogoutStatus] = useState<number>(0);

  useEffect(() => {
    if (formState.status === 200) {
      iconRef.current?.startAnimation();
    } else {
      iconRef.current?.stopAnimation();
    }
  }, [formState.status]);

  useEffect(() => {
    if (logoutStatus === 200) {
      router.push("/");
    }
  }, [logoutStatus, router]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 sm:max-w-3/7 lg:max-w-2/7">
      <div className="flex w-full flex-col items-start gap-2">
        <RefreshIcon
          size={22}
          ref={iconRef}
          className={`${formIsValid ? "text-inherit" : "text-red-900 dark:text-red-200"}`}
        />
        <Message variant={formIsValid ? "normal" : "error"}>
          {formState.msg ?? "Something went wrong"}
        </Message>
      </div>

      <form
        id="admin-form"
        action={formAction}
        className="flex w-full flex-col items-start justify-center gap-4"
      >
        <div className="flex w-full flex-col">
          <label htmlFor="tag" className="flex w-full items-center gap-2 py-1">
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

        <Button
          className="w-full"
          form="admin-form"
          type="submit"
          title="Submit"
          disabled={isPending}
        />
        <Button
          className="w-full"
          formAction={async () => {
            const res = await fetch("/api/auth/logout", { method: "POST" });
            setLogoutStatus(res.status);
          }}
          type="submit"
          title="Logout"
        />
      </form>
    </main>
  );
}
