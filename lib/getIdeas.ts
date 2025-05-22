// lib/getIdeas.ts
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export interface IdeaMeta {
  title: string
  slug: string
  startupCost: number
  breakEvenMonths: number
  summary: string
}

const ideasDir = path.join(process.cwd(), 'content/ideas')

export async function getAllIdeas(): Promise<IdeaMeta[]> {
  const files = await fs.readdir(ideasDir)
  const ideas = await Promise.all(
    files
      .filter(f => f.endsWith('.mdx'))
      .map(async file => {
        const raw = await fs.readFile(path.join(ideasDir, file), 'utf8')
        const { data } = matter(raw)
        return data as IdeaMeta
      })
  )
  return ideas
}
