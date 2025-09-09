"use client";

import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { revalidateData } from "@/lib/actions";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [state, formAction] = useActionState(revalidateData, {
    msg: "",
    status: 0,
  });

  useEffect(() => {
    if (state.status === 200) {
      toast.success(state.msg);
    } else {
      toast.error(state.msg);
    }
  }, [state]);

  return (
    <main className="flex flex-col w-full min-h-screen py-16 md:py-24 xl:py-32 gap-8 justify-center items-center">
      <form
        className="flex flex-col gap-4 justify-center items-center"
        action={formAction}
      >
        <Input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" title="Submit" disabled={password.length === 0} />
      </form>
    </main>
  );
}
