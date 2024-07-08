//@ts-nocheck
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
 
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { s } from 'hastscript';

import rehypeImgSize from 'rehype-img-size'
 
// defining document type where we will defing our mdx document frontmatter structure
// (all these fields will be passed to static json with types that can be imported and used by next app)
export const Post = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    cover: {
      type: 'image',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/articulos/${post._raw.flattenedPath}`,
    },
    readTime: {
      type: 'string',
      resolve: (post) => {
        const wordsPerMinute = 200;
        const noOfWords = post.body.raw.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return readTime;
      },
    },
  },
}));
 
export default makeSource({
  // folder in which we will store our content mdx files
  contentDirPath: 'articulos',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypeImgSize, { dir: "public" }],
      /**
       * Adds ids to headings
       */
      rehypeSlug,
      [
        /**
         * Adds auto-linking button after h1, h2, h3 headings
         */
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          test: ['h2', 'h3'],
          properties: { class: 'heading-link' },
          content: s(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              width: '24',
              height: '24',
              fill: 'none',
              stroke: 'currentColor',
              'stroke-width': '2',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
              'aria-label': 'Anchor link',
            },
            [
              s('line', { x1: '4', y1: '9', x2: '20', y2: '9' }),
              s('line', { x1: '4', y1: '15', x2: '20', y2: '15' }),
              s('line', { x1: '10', y1: '3', x2: '8', y2: '21' }),
              s('line', { x1: '16', y1: '3', x2: '14', y2: '21' }),
            ],
          ),
        } satisfies Partial<AutolinkOptions>,
      ],
         ],
  },
});

