import { getAllPostsForHome } from '../lib/api';
import { GetStaticProps } from 'next';
import { Post } from '../lib/types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PostGrid from '../components/PostGrid';
import Head from 'next/head';
import HomeGrid from '../components/HomeGrid';
import NewHeader from '../components/NewHeader';

interface HomeProps {
  allPosts: Post[];
}

// TODO implement preview
const Home = ({ allPosts }: HomeProps) => {
  return (
    <Layout preview={null}>
      <Head>
        <title>Blog Template</title>
      </Head>
      <NewHeader />
      <HomeGrid allPosts={allPosts} />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const allPosts: Post[] = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
    revalidate: 1,
  };
};
