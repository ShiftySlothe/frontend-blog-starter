import { getAllPostsForHome } from '../lib/api';
import { GetStaticProps } from 'next';
import { Post } from '../lib/types';
import Layout from '../components/Layout';

interface HomePageProps {
  allPosts: Post[];
  preview: boolean | null;
}

const Home = ({ allPosts, preview }: HomePageProps) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Layout preview={preview}>
      <div>{heroPost.title}</div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const allPosts: Post[] = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
};

export default Home;
