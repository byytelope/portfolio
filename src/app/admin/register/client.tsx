"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";

import type { LockKeyholeIconHandle } from "@/components/icons/lock-keyhole-icon";

import { LockKeyholeIcon } from "@/components/icons/lock-keyhole-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Message } from "@/components/ui/message";
import { registerAction } from "@/lib/auth/actions";

export default function AdminRegisterClient() {
  const router = useRouter();
  const iconRef = useRef<LockKeyholeIconHandle>(null);
  const [formState, formAction, isPending] = useActionState(registerAction, {
    msg: "Enter password to register passkey",
    status: 0,
  });
  const formIsValid = formState.status === 200 || formState.status === 0;

  useEffect(() => {
    if (formState.status === 200) {
      iconRef.current?.startAnimation();
      router.push("/admin/login");
    } else {
      iconRef.current?.stopAnimation();
    }
  }, [formState.status, router]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 sm:max-w-3/7 lg:max-w-2/7">
      <div className="flex w-full flex-col items-start gap-2">
        <LockKeyholeIcon
          size={22}
          ref={iconRef}
          className={`${formIsValid ? "text-inherit" : "text-red-900 dark:text-red-200"}`}
        />
        <Message variant={formIsValid ? "normal" : "error"}>
          {formState.msg ?? "Something went wrong"}
        </Message>
      </div>

      <form
        id="admin-reg-form"
        action={formAction}
        className="flex w-full flex-col items-start justify-center gap-4"
      >
        <div className="flex w-full flex-col">
          <label htmlFor="password" className="flex w-full items-center gap-2 py-1">
            <span>{"Password"}</span>
          </label>

          <Input id="password" name="password" type="password" className="w-full" />
        </div>

        <Button
          className="w-full"
          form="admin-reg-form"
          type="submit"
          title="Submit"
          disabled={isPending}
        />
        <Button
          className="w-full"
          type="button"
          title="Login"
          onClick={() => router.push("/admin/login")}
        />
      </form>
    </main>
  );
}
