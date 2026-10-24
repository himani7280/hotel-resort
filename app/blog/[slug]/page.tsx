import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/data";
import { Reveal } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { blogContent as blog } from "@/lib/data";

export const generateStaticParams = () => POSTS.map((post) => ({ slug: post.slug }));

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? blog.detail.fallbackTitle, description: post?.excerpt };
}

export default async function BlogDetailsPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = POSTS.findIndex((item) => item.slug === post.slug);
  const next = POSTS[(index + 1) % POSTS.length];
  const recent = POSTS.filter((item) => item.slug !== post.slug).slice(0, 6);

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.date}
        image={post.image}
        crumbs={[blog.detail.blogCrumb, { label: post.category }]}
      />

      <section className="relative isolate mx-auto grid max-w-7xl gap-8 px-4 py-4 my-3 sm:px-6 lg:grid-cols-[1fr_360px] lg:gap-10 lg:px-8">
        <article className="flex flex-col justify-between">
          <div>
            <Reveal dir="zoom" className="group relative h-72 overflow-hidden rounded-3xl sm:h-[360px]">
              <Photo src={post.image} alt={post.title} sizes="(min-width: 1024px) 60vw, 100vw" />
            </Reveal>
            <div className="mt-6 space-y-4 text-base leading-7 text-ink/80 text-justify [text-align:justify] [text-justify:inter-word] hyphens-auto sm:text-[0.98rem] sm:leading-[1.8]">
              {post.body.map((paragraph, i) => (
                <Reveal key={paragraph}>
                  <p className={i === 0 ? "first-letter:float-left first-letter:mr-3.5 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-teal" : ""}>
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-8">
            <Link href={blog.detail.backHome.href} className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-gold">
              {blog.detail.backHome.label}
            </Link>
          </Reveal>

          {next && (
            <Reveal className="mt-8 pt-2">
              <Link href={`/blog/${next.slug}`} className="group flex items-center justify-between gap-4 rounded-2xl bg-forest p-5 text-white transition hover:bg-teal">
                <span>
                  <span className="block text-xs uppercase tracking-widest text-gold">{blog.detail.nextStory}</span>
                  <span className="mt-1 block font-serif text-lg sm:text-xl">{next.title}</span>
                </span>
                <span className="text-2xl transition-transform group-hover:translate-x-2">{blog.detail.nextArrow}</span>
              </Link>
            </Reveal>
          )}
        </article>

        <aside className="flex flex-col space-y-6">
          <Reveal dir="right" delay={0.1} className="flex-1 rounded-3xl bg-white p-6 shadow-lg shadow-forest/5">
            <h2 className="font-serif text-2xl font-medium text-forest">{blog.detail.recentTitle}</h2>
            <ul className="mt-3 divide-y divide-forest/10">
              {recent.map((item) => (
                <li key={item.slug} className="py-3.5 first:pt-0 last:pb-0">
                  <Link href={`/blog/${item.slug}`} className="group flex gap-3.5">
                    <span className="group relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                      <Photo src={item.image} alt="" sizes="80px" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold">{item.category}</span>
                      <span className="mt-0.5 block truncate text-sm font-semibold leading-5 text-forest transition-colors group-hover:text-teal">{item.title}</span>
                      <span className="mt-1 line-clamp-2 h-8 text-justify [text-align:justify] [text-justify:inter-word] text-xs leading-4 text-ink/60">{item.excerpt}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </section>
    </>
  );
}
