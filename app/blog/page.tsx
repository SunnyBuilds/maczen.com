import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleCard } from "@/components/article-card"
import { CategoryTabs } from "@/components/category-tabs"
import { getAllPosts } from "@/lib/api"
import { BlogClient } from "./blog-client"

export default function BlogPage() {
  const posts = getAllPosts()

  // 提取所有分类
  const categoriesSet = new Set<string>()
  posts.forEach((post) => {
    if (post.frontmatter.category) {
      categoriesSet.add(post.frontmatter.category)
    }
  })
  const categories = ["All", ...Array.from(categoriesSet).sort()]

  // 转换为 ArticleCard 需要的格式
  const allArticles = posts.map((post) => ({
    image: post.frontmatter.image || "/placeholder.jpg",
    title: post.frontmatter.title,
    excerpt: post.frontmatter.description,
    category: post.frontmatter.category || "",
    readTime: post.frontmatter.readTime || "",
    slug: post.slug,
  }))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Blog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Explore our collection of baking guides, product reviews, and expert tips to elevate your home baking
              journey.
            </p>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <BlogClient articles={allArticles} categories={categories} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
