import { Link } from 'waku';
import { postArray } from '../helper';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import * as motion from 'framer-motion/client'

export default async function HomePage() {
  const data = await getData();
  const postList = postArray.map(
    post => {
      return (
        <li key={post.name}>
        <Link to={'/posts/'+ post.name}> 
        <div className="bg-white py-8 px-4 my-4 hover:drop-shadow rounded-md">
          <motion.h2
            layoutId={post.name}
            layout='position'
            className="text-2xl font-semibold ">{post.title}</motion.h2>
          <div className="">
          <Markdown remarkPlugins={[remarkGfm]}>{post.excerpt}</Markdown>
          </div>
          <div className="flex justify-end">
          </div>
        </div>
        </Link>
        </li>);
    }
  )
  console.log(postArray);
  return (
    <div className="px-1 py-8 lg:w-2/5 md:w-3/5 w-full mx-auto">
      <title>{data.title}</title>
      <h1 className="page-title">{data.headline}</h1>
      <p>{data.subtitle}</p>
      <ul>{postList}</ul>
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>

    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Toki',
    headline: 'Toki',
    subtitle: 'Minimalist static blog template for Waku',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
