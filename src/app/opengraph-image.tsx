import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          color: "#F5EFE6",
          padding: 72,
          border: "1px solid #2A2A2A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              border: "2px solid #2A2A2A",
              borderRadius: 14,
              alignItems: "center",
              justifyContent: "center",
              color: "#FF7A1A",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            SE
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 600 }}>{profile.name}</span>
            <span style={{ fontSize: 22, color: "#A39E95" }}>{profile.title}</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2.5 }}>
          {profile.headline}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#A39E95" }}>
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 7, background: "#FF7A1A" }} />
          React · Next.js · Node.js · PostgreSQL · OpenAI
        </div>
      </div>
    ),
    size,
  );
}
