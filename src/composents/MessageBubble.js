import React from 'react';
import { Box } from '@mui/material';

function MessageBubble({ message }) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '10px',
        maxWidth: '200px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {message}
    </Box>
  );
}

export default MessageBubble;
