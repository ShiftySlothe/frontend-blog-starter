import React from 'react';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml.js';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post } from '../../lib/types';
import { useRouter } from 'next/dist/client/router';
import ErrorPage from 'next/error';
import Layout from '../../components/Layout';
import { Box, Divider, Stack } from '@chakra-ui/layout';
import Head from 'next/head';
import Header from '../../components/Header';
import PostTitle from '../../components/PostTitle';
import PostHeader from '../../components/PostHeader';
import PostBody from '../../components/PostBody';
import MoreStories from '../../components/MoreStories';

interface PostPageProps {
  post: Post;
  morePosts: Post[];
  preview: boolean | null;
}
export default function PostPage({ post, morePosts, preview }: PostPageProps) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading...</PostTitle>
      ) : (
        <>
          <Head>
            <title>{post.title}</title>
            <meta property="og:image" content={post.ogImage?.url} />
          </Head>

          <Stack width={{ base: '95vw', md: '85vw' }} mx={'auto'}>
            <article>
              <PostHeader post={post} />
              {post.content && <PostBody content={post.content} />}
              <Divider />
            </article>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </Stack>
        </>
      )}
    </Layout>
  );
}

// TODO add types here

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = null,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview);
  const content = await markdownToHtml(data?.posts[0]?.content || '');

  return {
    props: {
      preview,
      post: {
        ...data?.posts[0],
        content,
      },
      morePosts: data?.morePosts,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts: Post[] = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  };
};
