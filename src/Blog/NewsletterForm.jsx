"use client";

// No subscribe endpoint exists in cms-backend yet — this is UI only until one is built.
export function NewsletterForm() {
  return (
    <form className="mt-4 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="you@company.com"
        className="h-11 rounded-lg border border-black/10 px-4 text-[14px] text-blackk"
      />
      <button
        type="submit"
        className="h-11 rounded-lg bg-bloo text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#012060]"
      >
        Subscribe
      </button>
    </form>
  );
}
