// app/ideas/[slug]/page.tsx
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

export default async function IdeaDetail({ params }: { params: { slug: string } }) {
  try {
    const file = await fs.readFile(
      path.join(process.cwd(), `content/ideas/${params.slug}.mdx`),
      'utf8'
    )
    const { content, data } = matter(file)
    return (
      <article className="prose lg:prose-lg">
        <h1>{data.title}</h1>
        <p className="text-sm text-slate-500">
          Startup €{data.startupCost} • BE {data.breakEvenMonths} mo
        </p>
        <MDXRemote source={content} />
      </article>
    )
  } catch {
    return notFound()
  }
}
