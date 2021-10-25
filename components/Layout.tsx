import { Box } from '@chakra-ui/layout';
import Meta from './Meta';
import React from 'react';
import Footer from './Footer';
import Alert from './Alert';

interface LayoutProps {
  preview: boolean | null;
  children: React.ReactNode;
}
export default function Layout({ preview, children }: LayoutProps) {
  return (
    <>
      <Meta />
      <Box minH="100vh">
        {preview && <Alert preview={preview} />}
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
}
