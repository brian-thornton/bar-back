import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';

const Home = ({Component}) => {
  return (
    <Container>
      <Grid.Container justify="center" css={{ "height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)" }}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ "width": "100%" }}>
            <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>Welcome to Bar Back</Text>
            <Text size={30} css={{ "textAlign": "center" }}>A cocktail inventory management and menu system.</Text>
            <Button size="md" shadow color="gradient" css={{ "width": "100%", "marginTop": "10px" }}>Join For Free</Button>
          </Col>
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Home