import React from 'react';
import { Post } from '../lib/types';
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Flex,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as UILink } from '@chakra-ui/layout';
import Link from 'next/link';
interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`} passHref>
      <Center cursor={'pointer'}>
        <Flex
          w={'full'}
          boxShadow="sm"
          px={{ base: 1, md: 3, lg: 6 }}
          pb={{ base: 1, md: 2 }}
          overflow={'hidden'}
          borderRadius={'sm'}
          backgroundImage={post.coverImage.url}
          backgroundPosition={'center'}
          h="100%"
          backgroundSize={'cover'}
          alignItems={'flex-end'}
        >
          <Box>
            <Box bg={'rgb(60, 60, 60, 0.6)'}>
              <Text
                color={'white'}
                textTransform={'uppercase'}
                fontWeight={400}
                fontSize={'xs'}
                letterSpacing={1.1}
                display={{ base: 'none', md: 'block' }}
              >
                {post.excerpt}
              </Text>
              <Heading
                color={useColorModeValue('gray.100', 'white')}
                fontSize={{ base: 'sm', md: 'xl' }}
                fontFamily={'body'}
                noOfLines={4}
              >
                {post.title}
              </Heading>
            </Box>
          </Box>
        </Flex>
      </Center>
    </Link>
  );
}
