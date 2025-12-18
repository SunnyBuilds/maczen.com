import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import { getPostBySlug, getAllPosts } from "@/lib/api"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import { format } from "date-fns"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const formattedDate = format(new Date(post.frontmatter.date), "MMMM d, yyyy")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Article Hero */}
        <section className="bg-primary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {post.frontmatter.category && (
                <Badge className="mb-4 bg-primary text-primary-foreground">{post.frontmatter.category}</Badge>
              )}
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {post.frontmatter.title}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{formattedDate}</span>
                </div>
                {post.frontmatter.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{post.frontmatter.readTime} read</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content with Sidebar */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Main Content (2/3) */}
              <div className="md:col-span-2 space-y-6">
                {post.frontmatter.image && (
                  <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src={post.frontmatter.image}
                      alt={post.frontmatter.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                <div className="prose prose-lg max-w-none">
                  <MDXRemote source={post.content} />
                </div>
              </div>

              {/* Sidebar (1/3) - Sticky */}
              <aside className="md:col-span-1">
                <div className="sticky top-20">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-4">Recommended Products</h3>
                      <div className="space-y-4">
                        <div className="h-fit">
                          <ProductCard
                            image="/sourdough-jar.jpg"
                            title="Glass Sourdough Starter Jar with Measurements"
                            rating={4.8}
                            reviewCount={587}
                            badge="Top Pick"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-muted/50 p-6">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2">Quick Tip</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Use filtered or bottled water for feeding your starter. Chlorine in tap water can inhibit
                        fermentation.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
