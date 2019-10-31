import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Home: React.FC = () => {
  return (
    <Container fixed>
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <h1>Hello Material UI</h1>
      </Typography>
    </Container>
  );
}

export default Home;