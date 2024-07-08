import { allArticles } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import MDXContent from '../mdx-content';
import { Metadata } from 'next';
import { Header } from "../../header";
import { Link } from "../../header/link";
import { Menu } from "../../header/menu";
import { Limit } from "../../limit";
import { Overlay } from "../../overlay";

interface IProps {
  params: { slug: string };
}

export const generateStaticParams = async () =>
  allArticles.map((post) => ({ slug: post._raw.flattenedPath }));

export default async function Page({ params: { slug } }: IProps) {
  const post = allArticles.find((post) => post._raw.flattenedPath === slug);

  if (!post) notFound();

  return (
    <article>
      <Overlay>
        <Header>
          <Menu>
            <Link id="/#projects">Proyectos</Link>
            <Link id="/#about">Sobre mí</Link>
            <Link id="/articulos">Articulos</Link>
            <Link id="/#contact">Contacto</Link>
          </Menu>
        </Header>
        <Limit>
          <div className='flex'>
          <div className="flex flex-col m-10">
            <h1 className="font-serif font-bold text-2xl md:text-3xl z-10">
              {post.title}
            </h1>
            <p className="text-base mt-4 mb-2 z-10 max-w-[300px] md:max-w-none">
              {post.excerpt}
            </p>
            <div>
              <time
                dateTime={post?.date}
                className="hidden"
              >
                {format(parseISO(post?.date), 'MMM dd, yyyy')}
              </time>
              <p>{post.readTime} min read</p>
            </div>
          </div>
                        <div className='p-6'>
              <Image
                src={post.cover?.filePath.replace('../public', '')}
                width={500}
                height={350}
                priority={true}
                alt={post.title}
              />
            </div>
          </div>
        </Limit>
      </Overlay>
      <Limit>
        <div className='m-10'>
          <MDXContent code={post.body.code} />
        </div>
      </Limit>
    </article>
  );
}

export function generateMetadata({ params: { slug } }: IProps): Metadata {
  const post = allArticles.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    return {};
  }

  const { excerpt, title, date } = post;

  const description = excerpt;

  const ogImage = {
    url: `${process.env.HOST}/blog/${slug}/og.png`,
  };

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      url: `${process.env.HOST}/blog/${slug}`,
      title,
      description,
      publishedTime: date,
      images: [ogImage],
    },
    twitter: {
      title,
      description,
      images: ogImage,
      card: 'summary_large_image',
    },
  };
}
