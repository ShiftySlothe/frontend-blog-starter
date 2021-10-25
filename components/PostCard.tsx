import React from 'react';
import { Post } from '../lib/types';
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Center py={1}>
      <Box
        w={'full'}
        boxShadow="sm"
        p={6}
        overflow={'hidden'}
        borderRadius={'sm'}
        backgroundImage={post.coverImage.url}
        backgroundPosition={'center'}
        h="100%"
        backgroundSize={'cover'}
      >
        <Stack bg={'rgb(60, 60, 60, 0.6)'}>
          <Text
            color={'white'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {post.excerpt}
          </Text>
          <Heading
            color={useColorModeValue('gray.300', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {post.title}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
