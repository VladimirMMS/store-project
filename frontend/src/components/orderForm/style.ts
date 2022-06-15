import { makeStyles } from '@mui/styles';


export const useStyle = makeStyles({
  formTitle: {
    fontSize: '30px',
    fontFamily: 'system-ui',
  },
  input: {
    width: '100%',
  },

  label: {
    marginBottom:'7px',
    color:'black',
    fontSize:'15px'
  },
  container: {
    background: 'white',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    alignItems: 'center',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
    
  },
  containerForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  }
});