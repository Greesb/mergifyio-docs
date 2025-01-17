import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Blockquote(props) {
  return (
    <Box
      pl="4"
      py="1"
      borderLeftWidth="2px"
      borderColor="primary"
      fontSize="md"
      sx={{
        '>': {
          ':not(:last-child)': {
            mb: 2,
          },
        },
      }}
      {...props}
    />
  );
}
