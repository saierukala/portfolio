import { profile } from "@/data/profile";

export default function Footer() {
  const date = new Date(profile.lastUpdated + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>Designed &amp; built by {profile.name} · Next.js · Vercel</p>
        <p>
          Last updated <time dateTime={profile.lastUpdated}>{date}</time>
        </p>
      </div>
    </footer>
  );
}
