import { Center, Link as UILink } from '@chakra-ui/layout';
import React from 'react';
import Link from 'next/link';
interface AlertProps {
  preview: boolean | null;
}
export default function Alert({ preview }: AlertProps) {
  return (
    <Center p={3} w="100vw" border="2px" borderColor="grey">
      {preview && (
        <>
          This is page is a preview.{' '}
          <UILink as={Link} href="/api/exit-preview">
            Click here
          </UILink>{' '}
          to exit preview mode.
        </>
      )}
    </Center>
  );
}
