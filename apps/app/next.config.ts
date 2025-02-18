import { env } from "@/env";
import type { NextConfig } from "next";
import { config, withAnalyzer } from "@repo/next-config";
import { withLogtail, withSentry } from "@repo/observability/next-config";

let nextConfig: NextConfig = withLogtail({ ...config });

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === "true") {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
