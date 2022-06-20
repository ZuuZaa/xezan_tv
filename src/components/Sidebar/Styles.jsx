import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  sidebarContainer: {
    minHeight: "100vh",
    padding: 10,
    backgroundColor: "#9B5AE1"
  },
  logoWrapper: {
    width: 180,
    height: 16
  },
  navLinkIcon: { color: "#fff" },
  navLinkText: {
    color: "#fff",
    fontSize: 14,
  },
  arrow: {
    color: "#fff",
    marginLeft: 50
  },
  navLink: {
    '&.active': {
      backgroundColor: '#A66CE4',
      borderRadius: 5
    },
    '&:hover': {
      borderRadius: 5
    }
  }
})