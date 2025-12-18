"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleCard } from "@/components/article-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Array<{
    title: string
    excerpt: string
    category: string
    readTime: string
    slug: string
    image: string
  }>>([])

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery)
    // In a real implementation, this would call an API endpoint
    // For now, we'll show a placeholder message
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Search
          </h1>
          <div className="max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles, reviews, guides..."
                className="pl-10 h-12 text-lg"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 flex-1 bg-background">
        <div className="container mx-auto px-4">
          {query ? (
            results.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-6">
                  Found {results.length} results for "{query}"
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((result, index) => (
                    <ArticleCard key={index} {...result} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No results found for "{query}". Try a different search term.
                </p>
              </div>
            )
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Enter a search term to find articles, reviews, and guides.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
