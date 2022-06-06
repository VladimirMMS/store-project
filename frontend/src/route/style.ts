import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
  title: {
    color: 'white',
    textDecoration: 'none',
    fontFamily:  'Times New Roman',
    textAlign: 'center'
  

  },
  container: {
    width: '18%',
    height: '100vh',
    textDecoration: 'none',
    backgroundImage: 'linear-gradient(45deg, red, #f06d06)'

  },
  link: {
    color: 'white',
    marginLeft: '20px',
    textDecoration: 'none',
    fontFamily:  'Times New Roman' ,
    fontSize: '1.4em',
  
  
    
    '&:hover': {
      opacity: 10
      
    }
  }
});
