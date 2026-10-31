import { articles } from "@/lib/articles";
import { createRssResponse } from "@/lib/rss";

export const dynamic = "force-static";

export function GET() {
  return createRssResponse("zh", articles);
}
