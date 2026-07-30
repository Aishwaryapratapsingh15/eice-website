"use client";

import { useActionState } from "react";
import { subscribeToNewsletter } from "./subscribeAction";

const initialState = {};

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);

  if (state.success) {
    return (
      <p className="mt-4 text-[14px] font-medium text-bloo">
        You&apos;re subscribed — look out for Thursday&apos;s digest.
      </p>
    );
  }

  return (
    <form action={formAction} className="mt-4 flex flex-col gap-3">
      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        className="h-11 rounded-lg border border-black/10 px-4 text-[14px] text-blackk"
      />
      {state.error && <p className="text-[13px] text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={isPending}
        className="h-11 rounded-lg bg-bloo text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#012060] disabled:opacity-60"
      >
        {isPending ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}
