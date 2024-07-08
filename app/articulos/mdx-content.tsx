import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC } from 'react';
import { MDXComponents } from './mdx-components';
 
interface IProps {
  code: string;
}
 
const MDXContent: FC<IProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return <Component components={MDXComponents} />;
};
 
export default MDXContent;
