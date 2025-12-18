import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/api"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ComparisonsPage() {
  const comparisons = getAllPosts("comparisons")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Product Comparisons
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Side-by-side comparisons to help you choose the best baking equipment for your needs.
          </p>
        </div>
      </section>

      <section className="py-12 flex-1 bg-background">
        <div className="container mx-auto px-4">
          {comparisons.length > 0 ? (
            <div className="space-y-8">
              {comparisons.map((comparison) => (
                <article key={comparison.slug} className="border-b border-border pb-8">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {new Date(comparison.frontmatter.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <h2 className="font-serif font-bold text-3xl mt-2 mb-3 text-foreground">
                    {comparison.frontmatter.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {comparison.frontmatter.description}
                  </p>
                  <Link
                    href={`/comparisons/${comparison.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Read Comparison
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No comparisons available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
