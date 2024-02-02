import { Button, Box } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import CheckIcon from '@mui/icons-material/Check';

function Controls({ checkMode, lines, handleCheck, handleReset }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box ml={3} mr={20}> {/* Add left and right margin to the first button */}
        <Button 
          variant='contained' 
        
          onClick={handleCheck}
        >
          <CheckIcon /> 
        </Button>
      </Box>
      {/* The second button does not need an additional left margin since the first button's right margin already creates the necessary space */}
      <Button 
        variant='contained' 
     
        onClick={handleReset}
      >
        <ReplyIcon /> 
      </Button>
    </Box>
  );
}

export default Controls;
