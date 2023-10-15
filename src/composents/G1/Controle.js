import { Button } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import CheckIcon from '@mui/icons-material/Check';

function Controls({ checkMode, lines, handleCheck, handleReset }) {
  return (
    <div>
      {checkMode !== 'reset' && lines.length === 2 && (
        <Button variant='contained' onClick={handleCheck}>
          <CheckIcon /> 
        </Button>
      )}
      {checkMode === 'reset' && (
        <Button variant='contained' onClick={handleReset}>
          <ReplyIcon/> 
        </Button>
      )}
    </div>
  );
}

export default Controls;
