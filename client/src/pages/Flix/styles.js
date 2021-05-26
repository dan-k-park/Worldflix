import { makeStyles } from '@material-ui/core/styles';

// Change to flexdirection column so images work
const useStyles = makeStyles({
  root: {
    margin: 'auto',
    height: '80vh',
    width: '90vw',
  },
  paperContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { useStyles };