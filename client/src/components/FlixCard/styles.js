import { makeStyles } from '@material-ui/core/styles';

// Change to flexdirection column so images work
const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '250px'
  },
  img: {
    height: 'auto',
    maxHeight: '250px',
    width: 'auto',
    maxWidth: '250px',
  },
});

export { useStyles };