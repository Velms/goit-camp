import { Link } from 'react-router-dom';
import { Container, Image, Title, Text, Wrapper } from './Home.styled';
import camper from '../../images/camper.jpg';

const Home = () => {
  return (
    <Container>
      <Title>Your next Outdoorsy adventure starts here!</Title>
      <Wrapper>
        <Image src={camper} alt="camper" />
        <Text>
          Discover our{' '}
          <Link to="/catalog" style={{ color: '#e44848', fontWeight: 'bold' }}>
            Campers models
          </Link>{' '}
          and find your travel home which ticks all of the boxes and makes your
          travel dreams come true. We offer a diverse selection of campervans
          and motorhomes from renowned brands like El Monte, Road Bear, and
          Mavericks, and many more.
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Home;
