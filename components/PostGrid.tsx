import { Box, Grid } from '@chakra-ui/layout';
import React, { useEffect } from 'react';

import { useMediaQuery } from '@chakra-ui/media-query';

interface PostGridProps {
  children: React.ReactNode;
}

export default function PostGrid({ children }: PostGridProps) {
  return (
    <Grid
      minH="calc(100vh - 60px)"
      templateRows={'repeat(3, 1fr)'}
      templateColumns={'repeat(4, 1fr)'}
      gap={2}
    >
      {children}
    </Grid>
  );
}
