import Head from 'next/head';
import { Nav } from '../src/components/Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  color: #333;
`;

const Title = styled.h1`
  margin: 0;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
`;

const Row = styled.div`
  max-width: 880px;
  margin: 80px auto 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Card = styled.a`
  padding: 18px 18px 24px;
  width: 220px;
  text-align: left;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border.normal};
  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.card.colors.primary};
  font-size: 18px;
`;

const CardContent = styled.p`
  margin: 0;
  padding: 12px 0 0;
  font-size: 13px;
  color: #333;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <Wrapper>
      <Title>Welcome to Next.js!</Title>
      <Description>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </Description>

      <Row>
        <Card href="https://nextjs.org/docs">
          <CardTitle>Documentation &rarr;</CardTitle>
          <CardContent>
            Learn more about Next.js in the documentation.
          </CardContent>
        </Card>
        <Card href="https://nextjs.org/learn">
          <CardTitle>Next.js Learn &rarr;</CardTitle>
          <CardContent>
            Learn about Next.js by following an interactive tutorial!
          </CardContent>
        </Card>
        <Card href="https://github.com/zeit/next.js/tree/master/examples">
          <CardTitle>Examples &rarr;</CardTitle>
          <CardContent>
            Find other example boilerplates on the Next.js GitHub.
          </CardContent>
        </Card>
      </Row>
    </Wrapper>
  </div>
);

export default Home;
