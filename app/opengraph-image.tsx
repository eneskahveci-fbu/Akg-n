import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "Akgün Omuzubozlu - Coldwell Banker Gayrimenkul Danışmanı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photoData = await readFile(
    path.join(process.cwd(), "public", "danisman-fotografi.jpg")
  );
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0B2545",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(212,175,55,0.25), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#D4AF37",
            }}
          >
            Gayrimenkul Danışmanı
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 72,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Akgün Omuzubozlu
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Coldwell Banker Söz Bir
          </div>
        </div>
        <img
          src={photoSrc}
          width={380}
          height={380}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "8px solid rgba(212,175,55,0.6)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
