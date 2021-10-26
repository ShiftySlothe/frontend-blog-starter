import React from 'react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface PostBodyProps {
  content: string;
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={ChakraUIRenderer()}>
      {content}
    </ReactMarkdown>
  );
}
