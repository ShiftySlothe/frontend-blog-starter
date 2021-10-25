import { GridItem } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';
import { Post } from '../lib/types';
import CenterCard from './CenterCard';
import PostCard from './PostCard';
import PostGrid from './PostGrid';

interface HomeGridProps {
  allPosts: Post[];
}
export default function HomeGrid({ allPosts }: HomeGridProps) {
  return (
    <PostGrid>
      {allPosts.slice(0, 5).map((p) => {
        return <PostCard post={p} key={p.slug} />;
      })}
      <GridItem colSpan={2}>
        <CenterCard />
      </GridItem>
      {allPosts.slice(5, 10).map((p) => {
        return <PostCard post={p} key={p.slug} />;
      })}
    </PostGrid>
  );
}
