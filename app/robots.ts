import { NextResponse } from "next/server";

export async function GET() {
  const robots = `
    User-agent: *
    Allow: /
    Sitemap: https://securitymonks.in/sitemap.xml
  `;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}