import { Avatar } from '@chakra-ui/avatar';
import { Box, Divider, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { Post } from '../lib/types';
import PostTitle from './PostTitle';
import Image from 'next/image';
import Date from './Date';
import { FaBorderNone } from 'react-icons/fa';

interface PostHeaderProps {
  post: Post;
}
export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <Box mt={{ base: 1, md: 3, lg: 6 }}>
      <Box>
        <PostTitle>{post.title}</PostTitle>
        <Divider my={{ base: 1, md: 3 }} />
        <Flex
          display={{ base: 'none', md: 'flex' }}
          mb={3}
          alignItems={'center'}
          ml={6}
        >
          <Avatar name={post.author.name} src={post.author.picture.url} />
          <Text ml={3}>{post.author.name}</Text>
        </Flex>
      </Box>

      <Box mb={{ base: 1, md: 3 }}>
        <Image
          src={post.coverImage.url}
          alt={`Cover image for ${post.title}`}
          width={2000}
          height={1000}
        />
      </Box>
      <Flex display={{ base: 'flex', md: 'none' }} mb={3} alignItems={'center'}>
        <Avatar name={post.author.name} src={post.author.picture.url} />
        <Text ml={3}>{post.author.name}</Text>
      </Flex>
      <Box>
        <Date dateString={post.date} />
      </Box>
      <Divider my={3} />
    </Box>
  );
}
