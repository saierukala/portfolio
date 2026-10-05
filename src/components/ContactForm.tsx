"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { toast } from "sonner";

const field =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none";

const showToast = (type: "success" | "error", message: string) =>
  toast.custom(
    () => (
      <div
        className={`flex w-[min(280px,calc(100vw-2rem))] items-center gap-3 rounded-full border px-4 py-3 text-black shadow-[0_18px_50px_rgba(0,0,0,0.28)] ${
          type === "success" ? "border-[#52c95c] bg-[#8df58c]" : "border-[#ff8b8b] bg-[#ff9c9c]"
        }`}
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/10">
          {type === "success" ? <Check className="h-4 w-4 stroke-[2.5]" /> : <X className="h-4 w-4 stroke-[2.5]" />}
        </div>
        <p className="text-sm font-semibold">{message}</p>
      </div>
    ),
    { duration: 2800, position: "top-center" },
  );

export default function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => null);
      if (res.ok) {
        setStatus("success");
        setFeedback("");
        showToast("success", "Message sent");
        setData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setFeedback(json?.error || "Failed to send message. Please try again.");
        showToast("error", "Message failed");
      }
    } catch {
      setStatus("error");
      setFeedback("Failed to send message. Please try again.");
      showToast("error", "Message failed");
    }
  };

  return (
    <form onSubmit={submit} className="flex w-full max-w-xl flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label>
          <span className="sr-only">Name</span>
          <input
            type="text"
            required
            placeholder="Name"
            autoComplete="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className={field}
          />
        </label>
        <label>
          <span className="sr-only">Email</span>
          <input
            type="email"
            required
            placeholder="Email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className={field}
          />
        </label>
      </div>
      <label>
        <span className="sr-only">Message</span>
        <textarea
          required
          rows={5}
          placeholder="Message"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className={`${field} resize-none`}
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="h-11 rounded-lg bg-accent text-sm font-medium text-accent-ink transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : status === "success" ? "Message sent ✓" : "Send message"}
      </button>
      <p
        aria-live="polite"
        className={`min-h-5 font-mono text-xs ${status === "error" ? "text-red-500" : "text-accent"}`}
      >
        {feedback}
      </p>
    </form>
  );
}
