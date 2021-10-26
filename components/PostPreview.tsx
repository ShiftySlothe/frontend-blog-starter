import { Box, Heading, Link as UILink, Text } from '@chakra-ui/layout';
import React from 'react';
import { Post } from '../lib/types';
import Image from 'next/image';
import Link from 'next/link';
import Date from './Date';
import { Avatar } from '@chakra-ui/avatar';
interface PostPreviewProps {
  post: Post;
}
export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <Box>
      <Link href={`/posts/${post.slug}`} passHref>
        <Box cursor={'pointer'}>
          <Box>
            <Image
              src={post.coverImage.url}
              alt={`Image for ${post.title}`}
              width={2000}
              height={1000}
            />
          </Box>
          <Heading fontSize={{ base: 'xl', md: '3xl' }}>{post.title}</Heading>
          <Box>
            <Date dateString={post.date} />
          </Box>
          <Text>{post.excerpt}</Text>
        </Box>
      </Link>
      <Avatar name={post.author.name} src={post.author.picture.url} />
    </Box>
  );
}
