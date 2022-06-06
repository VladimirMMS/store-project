import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
  container: {
    width: '100%',
    background: '#ADD8E6',
    height: '30vh',
    marginTop: '40px',
    textDecoration: 'none',
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  title: {
    fontSize: '3em',
    position: 'absolute',
    color: 'white'
  },
  main:{
    display: 'flex', 
    justifyContent: 'center',
     width: '100%', 
     backgroundImage: `url(${"https://www.uni-potsdam.de/fileadmin/projects/up/images/nachrichten/2020-03_Europa-digital_AdobeStock_245637983_Sikov.jpg"})` ,
     backgroundSize: "cover",
     backgroundRepeat : "no-repeat",
     backgroundPosition: "center"
    }

});
