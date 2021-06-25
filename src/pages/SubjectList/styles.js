import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '200px',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',

    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  cardMax: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    height: '400px',
  },
  cardMedia: {
    height: 0,
    position: 'relative',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
