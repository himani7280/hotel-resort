import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/data";
import { Reveal } from "../../components/Motion";
import { PageHero } from "../../components/PageHero";
import { Photo } from "../../components/Photo";

export const generateStaticParams = () => POSTS.map((post) => ({ slug: post.slug }));

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? "Article", description: post?.excerpt };
}

export default async function BlogDetailsPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = POSTS.findIndex((item) => item.slug === post.slug);
  const next = POSTS[(index + 1) % POSTS.length];
  const categories = [...new Set(POSTS.map((item) => item.category))];
  const recent = POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.date}
        image={post.image}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
      />

      <section className="relative isolate mx-auto grid max-w-7xl gap-8 px-4 py-4 my-3 sm:px-6 lg:grid-cols-[1fr_360px] lg:gap-10 lg:px-8">
        <article>
          <Reveal dir="zoom" className="group relative h-80 overflow-hidden rounded-3xl sm:h-[420px]">
            <Photo src={post.image} alt={post.title} sizes="(min-width: 1024px) 60vw, 100vw" />
          </Reveal>
          <div className="mt-10 space-y-6 text-lg leading-8 text-ink/80">
            {post.body.map((paragraph, i) => (
              <Reveal key={paragraph}>
                <p className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-teal" : ""}>
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {next && (
            <Reveal className="mt-14">
              <Link href={`/blog/${next.slug}`} className="group flex items-center justify-between gap-4 rounded-2xl bg-forest p-6 text-white transition hover:bg-teal">
                <span>
                  <span className="block text-xs uppercase tracking-widest text-gold">Next story</span>
                  <span className="mt-1 block font-serif text-xl">{next.title}</span>
                </span>
                <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </Reveal>
          )}
        </article>

        <aside className="space-y-8">
          <Reveal dir="right" className="rounded-3xl bg-white p-7 shadow-lg shadow-forest/5">
            <h2 className="font-serif text-2xl text-forest">Categories</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <li key={category} className={`rounded-full px-4 py-1.5 text-sm ${category === post.category ? "bg-forest text-white" : "bg-sand text-forest"}`}>
                  {category}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal dir="right" delay={0.1} className="rounded-3xl bg-white p-7 shadow-lg shadow-forest/5">
            <h2 className="font-serif text-2xl text-forest">Recent posts</h2>
            <ul className="mt-4 space-y-5">
              {recent.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="group flex gap-4">
                    <span className="group relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                      <Photo src={item.image} alt="" sizes="80px" />
                    </span>
                    <span>
                      <span className="line-clamp-2 text-sm font-semibold text-forest transition-colors group-hover:text-teal">{item.title}</span>
                      <span className="mt-1 block text-xs text-mist">{item.date}</span>
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
