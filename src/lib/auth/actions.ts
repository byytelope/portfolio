import type { PublicKeyCredentialCreationOptionsJSON } from "@simplewebauthn/browser";

import { startAuthentication, startRegistration } from "@simplewebauthn/browser";
import { redirect } from "next/navigation";

export const revalidateAction = async (_: { msg: string; status: number }, formData: FormData) => {
  const res = await fetch("/api/revalidate", { method: "POST", body: formData });
  const body: { msg: string } = await res.json();
  if (res.status === 401) {
    redirect("/admin/login");
  }
  return { ...body, status: res.status };
};

export const registerAction = async (_: { msg: string; status: number }, formData: FormData) => {
  try {
    const optionsRes = await fetch("/api/auth/passkey/register/options", {
      method: "POST",
      body: formData,
    });
    const options = await optionsRes.json();
    if (!optionsRes.ok) {
      return { ...(options as { msg: string }), status: optionsRes.status };
    }

    const attRes = await startRegistration({
      optionsJSON: options as PublicKeyCredentialCreationOptionsJSON,
    });

    const verifyRes = await fetch("/api/auth/passkey/register/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attRes),
    });
    const body: { msg: string } = await verifyRes.json();

    if (!verifyRes.ok) {
      throw new Error(body.msg);
    }

    return { msg: body.msg, status: 200 };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
      return { msg: e.message, status: 500 };
    }

    return { msg: "An error occurred", status: 500 };
  }
};

export const loginAction = async (_: { msg: string; status: number }) => {
  try {
    const optionsRes = await fetch("/api/auth/passkey/login/options", {
      method: "POST",
    });

    const options = await optionsRes.json();
    if (!optionsRes.ok) {
      throw new Error(options.msg);
    }

    const authResp = await startAuthentication({ optionsJSON: options });

    const verifyRes = await fetch("/api/auth/passkey/login/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authResp),
    });

    const body = await verifyRes.json();
    if (!verifyRes.ok) {
      throw new Error(body.msg);
    }

    return { msg: body.msg, status: 200 };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
      return { msg: e.message, status: 500 };
    }

    return { msg: "An error occurred", status: 500 };
  }
};
