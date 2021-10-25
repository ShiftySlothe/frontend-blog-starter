import { Center } from '@chakra-ui/react';
import { Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { BLOG_NAME, BLOG_TAG_LINE } from '../lib/blogDetails';
export default function CenterCard() {
  return (
    <Center>
      <Stack dir={'row'} textAlign="center" mt={5}>
        <Heading>{BLOG_NAME}</Heading>
        <Text>{BLOG_TAG_LINE}</Text>
      </Stack>
    </Center>
  );
}
