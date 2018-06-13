import React from 'react';
import {Container, Card, Grid} from 'semantic-ui-react';
import * as styles from './Home.styles';

class Home extends React.Component {
  render() {
    return (
      <Container className={`${styles.home} home`}>
        <Card>{message}</Card>
        <Grid>
          {Object.keys(colors).map(color =>(
            <Grid.Column style={{backgroundColor: `${colors[color]}`}}>
              {`${color}`}
            </Grid.Column>
          ) )}
        </Grid>
      </Container>
    );
  }
}

export default Home;
