"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";

import { LockKeyholeIcon, type LockKeyholeIconHandle } from "@/components/icons/lock-keyhole-icon";
import { Button } from "@/components/ui/button";
import { Message } from "@/components/ui/message";
import { loginAction } from "@/lib/auth/actions";

export default function AdminLoginPage() {
  const router = useRouter();
  const iconRef = useRef<LockKeyholeIconHandle>(null);
  const [formState, formAction, isPending] = useActionState(loginAction, {
    msg: "Login with passkey",
    status: 0,
  });
  const formIsValid = formState.status === 200 || formState.status === 0;

  useEffect(() => {
    if (formState.status === 200) {
      iconRef.current?.startAnimation();
      router.push("/admin");
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
        id="admin-login-form"
        action={formAction}
        className="flex w-full flex-col items-start justify-center gap-4"
      >
        <Button
          className="w-full"
          form="admin-login-form"
          type="submit"
          title="Login"
          disabled={isPending}
        />
        <Button
          className="w-full"
          type="button"
          title="Register"
          onClick={() => router.push("/admin/register")}
        />
      </form>
    </main>
  );
}
