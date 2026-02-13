import { Article } from "contentlayer/generated";
import Link from 'next/link';

export function Post({ title, excerpt, url, readTime }: Article) {
  return (
    <li className="flex w-full border-b border-gray-200 pb-4 last:border-0">
      <Link href={url} className="flex flex-col w-full gap-2 hover:opacity-75 transition-opacity">
          <div className="font-bold text-xl font-serif text-normal-text">{title}</div>
          <p className="italic text-sm text-gray-600 line-clamp-2">{excerpt}</p>
          <span className="self-end font-bold text-xs text-secondary-text">{readTime} min de lectura</span>
      </Link>
    </li>
  )
}
