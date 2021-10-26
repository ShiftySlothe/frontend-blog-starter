import { Heading } from '@chakra-ui/layout';
import React from 'react';

interface PostTitleProps {
  children: React.ReactNode;
}
export default function PostTitle({ children }: PostTitleProps) {
  return <Heading fontSize={{ base: '3xl', md: '8xl' }}>{children}</Heading>;
}
