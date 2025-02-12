"use client";

import { useActionState, useEffect } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { revalidateExperienceData } from "@/lib/actions";
import { toast } from "sonner";

export default function AdminPage() {
  const [state, formAction] = useActionState(revalidateExperienceData, {
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
    <>
      <main className="flex flex-col w-full min-h-screen py-16 md:py-24 xl:py-32 gap-8 justify-center items-center">
        <form
          className="flex flex-col gap-4 justify-center items-center"
          action={formAction}
        >
          <Input id="password" name="password" type="password" />
          <Button type="submit" title="Revalidate" />
        </form>
      </main>
    </>
  );
}
