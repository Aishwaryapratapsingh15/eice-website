import { NextResponse } from "next/server";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

// Job applications from the Contact page. Like /api/contact and /api/submit
// this is a pass-through: the validated multipart form (including the resume
// file) is forwarded as-is to the endpoint in CAREERS_ENDPOINT. That backend
// is not part of this repo, so the route answers 501 until the variable is set.
export async function POST(request) {
  const endpoint = process.env.CAREERS_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json(
      { status: 501, message: "Applications are not configured yet" },
      { status: 501 },
    );
  }

  try {
    const form = await request.formData();

    const resume = form.get("resume");
    if (!resume || typeof resume === "string" || !resume.size) {
      return NextResponse.json({ status: 400, message: "Resume is required" }, { status: 400 });
    }
    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json({ status: 400, message: "Resume is larger than 5 MB" }, { status: 400 });
    }
    if (!/\.(pdf|docx?)$/i.test(resume.name || "")) {
      return NextResponse.json({ status: 400, message: "Resume must be a PDF or Word file" }, { status: 400 });
    }
    for (const field of ["role", "experience", "name", "email", "phone", "location", "notice"]) {
      if (!String(form.get(field) ?? "").trim()) {
        return NextResponse.json({ status: 400, message: `Missing ${field}` }, { status: 400 });
      }
    }

    const response = await fetch(endpoint, { method: "POST", body: form });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json({ status: 500, message: "Server error" }, { status: 500 });
  }
}
