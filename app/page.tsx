import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ArticleCard } from "@/components/article-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getAllPosts } from "@/lib/api"

const topPicks = [
  {
    image: "/stand-mixer.png",
    title: "Professional Stand Mixer with 6-Speed Settings",
    rating: 4.8,
    reviewCount: 1240,
    badge: "Top Pick",
  },
  {
    image: "/bread-proofing-basket.jpg",
    title: "Natural Rattan Bread Proofing Basket Set",
    rating: 4.7,
    reviewCount: 856,
    badge: "Best Value",
  },
  {
    image: "/dutch-oven.jpg",
    title: "Cast Iron Dutch Oven for Artisan Bread",
    rating: 4.9,
    reviewCount: 2103,
    badge: "Editor's Choice",
  },
  {
    image: "/digital-kitchen-scale.jpg",
    title: "Precision Digital Kitchen Scale",
    rating: 4.6,
    reviewCount: 672,
  },
]

export default function Home() {
  const posts = getAllPosts()
  const latestArticles = posts.slice(0, 3).map((post) => ({
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
        {/* Hero Section */}
        <section className="relative bg-primary/10 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Welcome to Baking Queen
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                Your trusted source for home baking reviews, recipes, and tips. Discover the best tools and ingredients
                to create artisanal bread, pastries, and desserts in your own kitchen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/top-picks">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Browse Top Picks
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button size="lg" variant="outline">
                    Read Our Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Top Picks Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Top Picks</h2>
                <p className="text-muted-foreground leading-relaxed">Our favorite baking tools and ingredients</p>
              </div>
              <Link href="/top-picks">
                <Button variant="ghost">
                  View All
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topPicks.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Reviews Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Latest Articles</h2>
                <p className="text-muted-foreground leading-relaxed">Fresh baking tips, reviews, and recipes</p>
              </div>
              <Link href="/blog">
                <Button variant="ghost">
                  View All
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            {latestArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestArticles.map((article, index) => (
                  <ArticleCard key={index} {...article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles available yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
