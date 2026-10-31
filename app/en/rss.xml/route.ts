import { englishArticles } from "@/lib/localized-articles";
import { createRssResponse } from "@/lib/rss";

export const dynamic = "force-static";

export function GET() {
  return createRssResponse("en", englishArticles);
}
