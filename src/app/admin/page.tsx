"use client";
import { useActionState, useEffect, useRef } from "react";

import {
  LockKeyholeIcon,
  type LockKeyholeIconHandle,
} from "@/components/icons/lock-keyhole-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Message } from "@/components/ui/message";
import { revalidateData } from "@/lib/actions";

export default function AdminPage() {
  const iconRef = useRef<LockKeyholeIconHandle>(null);
  const [formState, formAction, isPending] = useActionState(revalidateData, {
    msg: "",
    status: 0,
  });

  useEffect(() => {
    if (formState.status === 200) {
      iconRef.current?.startAnimation();
    } else {
      iconRef.current?.stopAnimation();
    }
  }, [formState.status]);

  return (
    <main className="flex flex-col w-full sm:max-w-3/7 lg:max-w-2/7 min-h-screen gap-4 justify-center items-start">
      <div className="flex items-center gap-4">
        <LockKeyholeIcon size={16} ref={iconRef} />
        <span>{"Enter password to refresh data"}</span>
      </div>

      <form
        id="admin-form"
        action={formAction}
        className="flex flex-col gap-4 justify-center items-start w-full"
      >
        <div className="flex gap-2 w-full">
          <Input name="password" type="password" className="w-full" />
          <Button
            form="admin-form"
            type="submit"
            title="Submit"
            disabled={isPending}
          />
        </div>
      </form>

      <Message variant={formState.status === 200 ? "normal" : "error"}>
        {formState.msg}
      </Message>
    </main>
  );
}
