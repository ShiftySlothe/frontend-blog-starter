import { Heading, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import { Post } from '../lib/types';
import PostPreview from './PostPreview';
import { Link as UILink } from '@chakra-ui/layout';
import Link from 'next/link';

interface MoreStoriesProps {
  posts: Post[];
}
export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section>
      <Heading>More Stories</Heading>
      <SimpleGrid columns={2} spacing={2}>
        {posts.map((post) => (
          <PostPreview post={post} key={post.slug} />
        ))}
      </SimpleGrid>
    </section>
  );
}
