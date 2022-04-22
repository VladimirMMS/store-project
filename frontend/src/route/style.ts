import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
  container: {
    background: '#ADD8E6',
    height: '30vh',
    marginTop: '40px',
    textDecoration: 'none'
  },
  link: {
    marginLeft: '10px',
    textDecoration: 'none',
    color: '#1976d2',
    fontFamily: 'serif',
    fontSize: '1.3em',
    backgroundImage: 'linear-gradient(to right, #54b3d6, #54b3d6 50%, #000 50%)',
    backgroundSize: '200% 100%',
    backgroundPosition: '-100%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    
    '&:hover': {
      backgroundPosition: '0',
      with: '100%',
      
    }
  }
});
