import { ImageResponse } from "next/og";

export const alt = "No Charisma Independent Idea Factory";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f0e8",
          color: "#10100e",
          padding: 54,
          border: "22px solid #10100e",
          fontFamily: "Arial",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 22,
            border: "1px solid #b9ad9b",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 25,
            letterSpacing: 1,
            color: "#314f42",
            textTransform: "uppercase",
          }}
        >
          <span>NC_IF / 2026</span>
          <span style={{ color: "#ff4a12" }}>Active / unresolved</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 36 }}>
          <div
            style={{
              width: 210,
              height: 210,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#10100e",
              color: "#f5f0e8",
              fontSize: 112,
              fontWeight: 900,
              letterSpacing: -12,
              lineHeight: 1,
            }}
          >
            nc
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: 112,
                lineHeight: 0.86,
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              No Charisma
            </div>
            <div
              style={{
                maxWidth: 760,
                fontSize: 34,
                lineHeight: 1.15,
                color: "#314f42",
              }}
            >
              Independent idea factory making products, identities, tools and
              experiments.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
