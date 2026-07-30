"use server";

const BLOG_API_URL = process.env.BLOG_API_URL || "http://eiceapi.eicetechnology.com/api/v1";

export async function subscribeToNewsletter(_prevState, formData) {
  const email = String(formData.get("email") ?? "").trim();

  if (!email) {
    return { error: "Please enter your email." };
  }

  try {
    const res = await fetch(`${BLOG_API_URL}/newsletter/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const body = await res.json().catch(() => null);

    if (!res.ok || !body || body.success === false) {
      return { error: body?.message ?? "Something went wrong. Please try again." };
    }

    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}
