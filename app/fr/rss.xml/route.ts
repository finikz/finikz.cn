import { frenchArticles } from "@/lib/localized-articles";
import { createRssResponse } from "@/lib/rss";

export const dynamic = "force-static";

export function GET() {
  return createRssResponse("fr", frenchArticles);
}
