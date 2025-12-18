import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Content type directories
type ContentType = "posts" | "reviews" | "comparisons" | "guides"

function getContentDirectory(type: ContentType = "posts"): string {
  return path.join(process.cwd(), `content/${type}`)
}

export interface PostFrontmatter {
  title: string
  date: string
  description: string
  category?: string
  readTime?: string
  image?: string
  slug?: string
  author?: string
  [key: string]: unknown
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export function getPostSlugs(type: ContentType = "posts"): string[] {
  const directory = getContentDirectory(type)
  if (!fs.existsSync(directory)) {
    return []
  }

  const fileNames = fs.readdirSync(directory)
  return fileNames
    .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
    .map((name) => name.replace(/\.(mdx|md)$/, ""))
}

export function getPostBySlug(slug: string, type: ContentType = "posts"): Post | null {
  try {
    const directory = getContentDirectory(type)

    // Try .mdx first, then .md
    let fullPath = path.join(directory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(directory, `${slug}.md`)
    }

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: {
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        category: data.category || "",
        readTime: data.readTime || "",
        image: data.image || "",
        ...data,
      },
      content,
    }
  } catch (error) {
    console.error(`Error reading ${type}/${slug}:`, error)
    return null
  }
}

export function getAllPosts(type: ContentType = "posts"): Post[] {
  const slugs = getPostSlugs(type)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, type))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime()
      const dateB = new Date(b.frontmatter.date).getTime()
      return dateB - dateA
    })

  return posts
}

export function searchAllContent(query: string): Post[] {
  const allContent: Post[] = []
  const types: ContentType[] = ["posts", "reviews", "comparisons", "guides"]

  for (const type of types) {
    const posts = getAllPosts(type)
    allContent.push(...posts.map(post => ({ ...post, frontmatter: { ...post.frontmatter, contentType: type } })))
  }

  const lowerQuery = query.toLowerCase()
  return allContent.filter(post =>
    post.frontmatter.title.toLowerCase().includes(lowerQuery) ||
    post.frontmatter.description.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery)
  )
}
