"use client";

import { useActionState, useEffect, useRef, useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import {
  LockKeyholeIcon,
  type LockKeyholeIconHandle,
} from "@/components/icons/LockKeyholeIcon";
import { Message } from "@/components/Message";
import { revalidateData } from "@/lib/actions";

export default function AdminPage() {
  const iconRef = useRef<LockKeyholeIconHandle>(null);
  const [password, setPassword] = useState("");
  const [formState, formAction] = useActionState(revalidateData, {
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
    <main className="flex flex-col w-fit min-h-screen py-16 md:py-24 xl:py-32 gap-4 justify-center items-start">
      <div className="flex items-center gap-4">
        <LockKeyholeIcon size={16} ref={iconRef} />
        <span>{"Enter password to refresh data"}</span>
      </div>

      <form
        className="flex flex-col gap-4 justify-center items-start w-full"
        action={formAction}
      >
        <div className="flex gap-2 w-full">
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />

          <Button
            type="submit"
            title="Submit"
            disabled={password.length === 0}
          />
        </div>
      </form>

      <Message variant={formState.status === 200 ? "normal" : "error"}>
        <p>{formState.msg}</p>
      </Message>
    </main>
  );
}
