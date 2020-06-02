import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


import Grid from './Grid';
import ProTip from './ProTip';
import NavBar from './NavBar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Stockly
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <NavBar />
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI React Example
        </Typography>
        <Grid />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}