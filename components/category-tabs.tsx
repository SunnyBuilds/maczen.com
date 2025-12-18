"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CategoryTabsProps {
  categories: string[]
  onCategoryChange: (category: string) => void
  defaultCategory?: string
}

export function CategoryTabs({ categories, onCategoryChange, defaultCategory }: CategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory || categories[0])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    onCategoryChange(category)
  }

  return (
    <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="w-full">
      <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-muted p-2">
        {categories.map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
