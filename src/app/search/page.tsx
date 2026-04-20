import Link from "next/link";
import { Search, Filter, Image as ImageIcon, User, ArrowRight } from "lucide-react";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Footer } from "@/components/shared/footer";
import { fetchSiteFeed } from "@/lib/site-connector";
import { buildPostUrl, getPostTaskKey } from "@/lib/task-data";
import { getMockPostsForTask } from "@/lib/mock-posts";
import { SITE_CONFIG } from "@/lib/site-config";
import { TaskPostCard } from "@/components/shared/task-post-card";

export const revalidate = 3;

const matchText = (value: string, query: string) =>
  value.toLowerCase().includes(query);

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, " ");

const compactText = (value: unknown) => {
  if (typeof value !== "string") return "";
  return stripHtml(value).replace(/\s+/g, " ").trim().toLowerCase();
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }>;
}) {
  const resolved = (await searchParams) || {};
  const query = (resolved.q || "").trim();
  const normalized = query.toLowerCase();
  const category = (resolved.category || "").trim().toLowerCase();
  const task = (resolved.task || "").trim().toLowerCase();
  const useMaster = resolved.master !== "0";
  const feed = await fetchSiteFeed(
    useMaster ? 1000 : 300,
    useMaster
      ? { fresh: true, category: category || undefined, task: task || undefined }
      : undefined
  );
  const posts =
    feed?.posts?.length
      ? feed.posts
      : useMaster
        ? []
        : SITE_CONFIG.tasks.flatMap((t) => getMockPostsForTask(t.key));

  const filtered = posts.filter((post) => {
    const content = post.content && typeof post.content === "object" ? post.content : {};
    const typeText = compactText((content as any).type);
    if (typeText === "comment") return false;
    const description = compactText((content as any).description);
    const body = compactText((content as any).body);
    const excerpt = compactText((content as any).excerpt);
    const categoryText = compactText((content as any).category);
    const tags = Array.isArray(post.tags) ? post.tags.join(" ") : "";
    const tagsText = compactText(tags);
    const derivedCategory = categoryText || tagsText;
    if (category && !derivedCategory.includes(category)) return false;
    if (task && typeText && typeText !== task) return false;
    if (!normalized.length) return true;
    return (
      matchText(compactText(post.title || ""), normalized) ||
      matchText(compactText(post.summary || ""), normalized) ||
      matchText(description, normalized) ||
      matchText(body, normalized) ||
      matchText(excerpt, normalized) ||
      matchText(tagsText, normalized)
    );
  });

  const results = normalized.length > 0 ? filtered : filtered.slice(0, 24);

  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-[#fff7e8] to-[#fffaf2]">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Search</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
              Find <span className="text-amber-500">images & creators</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {query
                ? `Showing results for "${query}".`
                : "Search across galleries, creator profiles, and stories."}
            </p>

            <form action="/search" className="mt-8 max-w-3xl">
              <input type="hidden" name="master" value="1" />
              {category ? <input type="hidden" name="category" value={category} /> : null}
              {task ? <input type="hidden" name="task" value={task} /> : null}
              <div className="flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-lg sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    name="q"
                    defaultValue={query}
                    placeholder="Search galleries, creators, tags…"
                    className="h-14 w-full rounded-xl bg-transparent pl-12 pr-4 text-sm outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 text-sm font-bold text-white shadow-md hover:opacity-90"
                >
                  Search <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1 font-semibold text-slate-500">
                <Filter className="h-3 w-3" /> Quick filters:
              </span>
              {[
                { label: "All", href: "/search" },
                { label: "Images", href: "/search?task=image" },
                { label: "Profiles", href: "/search?task=profile" },
                { label: "Portrait", href: "/search?q=portrait" },
                { label: "Brand", href: "/search?q=brand" },
              ].map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className="rounded-full border border-amber-200 bg-white px-3 py-1.5 font-semibold text-slate-700 hover:border-amber-400 hover:bg-amber-50"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-700">
              {results.length} result{results.length === 1 ? "" : "s"}
            </p>
            <div className="flex items-center gap-2 text-xs">
              <Link href="/images" className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 font-bold text-amber-600">
                <ImageIcon className="h-3 w-3" /> Browse Gallery
              </Link>
              <Link href="/profile" className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 font-bold text-amber-600">
                <User className="h-3 w-3" /> Browse Creators
              </Link>
            </div>
          </div>

          {results.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((post) => {
                const taskKey = getPostTaskKey(post);
                const href = taskKey ? buildPostUrl(taskKey, post.slug) : `/posts/${post.slug}`;
                return <TaskPostCard key={post.id} post={post} href={href} />;
              })}
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-amber-200 bg-white p-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                <Search className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">No matches found</h3>
              <p className="mt-2 text-sm text-slate-500">
                Try a different keyword, or browse our gallery and creators.
              </p>
              <div className="mt-5 flex justify-center gap-2">
                <Link
                  href="/images"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-md"
                >
                  Browse Gallery
                </Link>
                <Link
                  href="/profile"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-800"
                >
                  Browse Creators
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
