import { ImageResponse } from "next/og";

export const alt = "Net-Flow premium web systems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 18% 18%, rgba(25,183,255,0.28), transparent 24%), radial-gradient(circle at 84% 20%, rgba(52,243,190,0.22), transparent 20%), linear-gradient(180deg, #06111a 0%, #081523 42%, #06111a 100%)",
          color: "#f4f7fb",
          fontFamily: "sans-serif",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "28px",
            borderRadius: "34px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            gap: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  height: 64,
                  width: 64,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(25,183,255,0.95), transparent 58%), radial-gradient(circle at 70% 70%, rgba(52,243,190,0.92), transparent 58%), rgba(255,255,255,0.04)",
                  display: "flex",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ fontSize: 34, fontWeight: 700 }}>Net-Flow</div>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.38em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.48)",
                  }}
                >
                  Premium web systems
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: 12,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.68)",
                }}
              >
                Warszawa / remote / premium web systems
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 76,
                  lineHeight: 0.9,
                  fontWeight: 700,
                  letterSpacing: "-0.07em",
                }}
              >
                <span>Budujemy strony</span>
                <span>i systemy,</span>
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #eff8ff 0%, #19b7ff 38%, #34f3be 100%)",
                    color: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  które wyglądają premium
                </span>
              </div>

              <div
                style={{
                  maxWidth: 560,
                  fontSize: 24,
                  lineHeight: 1.45,
                  color: "rgba(244,247,251,0.68)",
                }}
              >
                Design, commerce i operational control zamknięte w jednym
                standardzie wykonania.
              </div>
            </div>
          </div>

          <div
            style={{
              width: "34%",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                borderRadius: 28,
                border: "1px solid rgba(255,255,255,0.1)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                padding: 22,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.42)",
                }}
              >
                Signature stack
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                }}
              >
                {["Surface", "Commerce", "Operations", "NetFlow-CMS"].map((item) => (
                  <div
                    key={item}
                    style={{
                      width: "48%",
                      borderRadius: 20,
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.05)",
                      padding: "18px 16px",
                      fontSize: 18,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: 28,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                padding: 22,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                ["Performance", "92%"],
                ["Conversions", "89%"],
                ["Control", "96%"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 17,
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
