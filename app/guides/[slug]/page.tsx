import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/api"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts("guides")
  return posts.map((post) => ({
    slug: post?.slug || "",
  }))
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug, "guides")

  if (!post) {
    notFound()
  }

  const { frontmatter, content } = post
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-background flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content - 2/3 width */}
            <div className="md:col-span-2">
              {frontmatter.category && (
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {frontmatter.category}
                </span>
              )}
              <h1 className="font-serif font-bold text-4xl mt-3 mb-4 leading-tight text-balance text-foreground">
                {frontmatter.title || "Untitled Post"}
              </h1>
              {frontmatter.date && (
                <p className="text-muted-foreground mb-8">
                  Published {new Date(frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {frontmatter.author && ` · By ${frontmatter.author}`}
                  {frontmatter.readTime && ` · ${frontmatter.readTime} min read`}
                </p>
              )}

              {/* Description */}
              {frontmatter.description && (
                <p className="text-foreground/80 mb-8 leading-relaxed">{frontmatter.description}</p>
              )}

              {/* Hero Image */}
              {frontmatter.image && (
                <div className="relative aspect-video mb-8 border border-border rounded-lg overflow-hidden">
                  <Image
                    src={frontmatter.image}
                    alt={frontmatter.title || "Post image"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <MDXRemote source={content} />
              </div>
            </div>

            {/* Sidebar - 1/3 width, sticky */}
            <aside className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-muted p-6 border border-border rounded-lg">
                  <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Related Guides</h3>
                  <ul className="space-y-3 text-sm">
                    {getAllPosts("guides")
                      .filter((p) => p?.slug !== slug)
                      .slice(0, 3)
                      .map((post) => (
                        <li key={post?.slug}>
                          <Link
                            href={`/guides/${post?.slug}`}
                            className="text-primary hover:underline leading-relaxed"
                          >
                            {post?.frontmatter.title || "Untitled"}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
