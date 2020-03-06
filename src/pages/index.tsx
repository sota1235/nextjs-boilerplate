import React from 'react';
import { Nav } from '../components/Nav';
import styled from 'styled-components';
import Link from 'next/link';
import { Head } from '../nextComponents/Head';

const Wrapper = styled.div`
  width: 100%;
  color: #333;
`;

const Home = () => (
  <div>
    <Head noindex={false} title="Top page" />

    <Nav />

    <Wrapper>
      <div>top page</div>
      <Link href="/concerts/[concertId]" as="concerts/1">
        <a>Concert 1</a>
      </Link>
      <Link href="/concerts/[concertId]/edit" as="concerts/1/edit">
        <a>Concert 1 Edit</a>
      </Link>
    </Wrapper>
  </div>
);

export default Home;
