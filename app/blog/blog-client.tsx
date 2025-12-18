"use client"

import { useState } from "react"
import { ArticleCard } from "@/components/article-card"
import { CategoryTabs } from "@/components/category-tabs"

interface Article {
  image: string
  title: string
  excerpt: string
  category: string
  readTime: string
  slug: string
}

interface BlogClientProps {
  articles: Article[]
  categories: string[]
}

export function BlogClient({ articles, categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles =
    selectedCategory === "All" ? articles : articles.filter((article) => article.category === selectedCategory)

  return (
    <>
      {/* Topic Filter */}
      <div className="mb-8">
        <CategoryTabs categories={categories} onCategoryChange={setSelectedCategory} defaultCategory="All" />
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles found in this category.</p>
        </div>
      )}
    </>
  )
}

