import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          border: "3px solid #2A2A2A",
          borderRadius: 14,
          color: "#FF7A1A",
          fontSize: 30,
          fontWeight: 700,
        }}
      >
        SE
      </div>
    ),
    size,
  );
}
