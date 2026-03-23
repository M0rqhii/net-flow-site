import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Net-Flow",
    short_name: "Net-Flow",
    description:
      "Premium strony firmowe, e-commerce, integracje i warstwa operacyjna od Net-Flow.",
    start_url: "/",
    display: "standalone",
    background_color: "#06111a",
    theme_color: "#06111a",
    icons: [
      {
        src: "/brand/logo-symbol.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
