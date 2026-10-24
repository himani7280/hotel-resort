import type { Metadata } from "next";
import Link from "next/link";
import { IMG, POSTS } from "@/lib/data";
import { BlogCard } from "@/components/Cards";
import { Reveal, StackList } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Sparkles } from "@/components/BgFx";
import { blogContent as blog } from "@/lib/data";

export const metadata: Metadata = {
  title: blog.metadata.title,
  description: blog.metadata.description,
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        title={blog.hero.title}
        subtitle={blog.hero.subtitle}
        image={IMG[blog.hero.imageKey as keyof typeof IMG]}
        crumbs={blog.hero.crumbs}
      />
      <section className="relative isolate mx-auto max-w-7xl px-4 py-4 my-3 sm:px-6 lg:px-8">
        <Sparkles />
        {featured && (
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid items-stretch overflow-hidden rounded-[2rem] bg-forest text-white shadow-2xl shadow-forest/20 lg:grid-cols-2"
            >
              <div className="relative h-64 w-full overflow-hidden lg:h-full lg:min-h-[380px]">
                <Photo src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <span className="w-fit rounded-full bg-gold px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
                    {blog.featuredLabel} · {featured.category}
                  </span>
                  <h2 className="mt-4 font-serif text-2xl font-medium leading-[1.2] text-balance sm:text-3xl lg:text-[2.25rem]">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 text-justify [text-align:justify] [text-justify:inter-word]">{featured.excerpt}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <p className="text-xs text-white/60">
                    {featured.date}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold transition-all group-hover:gap-3">
                    {blog.readStory}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        )}
        <StackList className="mt-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </StackList>
      </section>
    </>
  );
}
