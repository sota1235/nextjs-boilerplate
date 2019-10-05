import React from 'react';
import Head from 'next/head';
import { Nav } from '../src/components/Nav';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  width: 100%;
  color: #333;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

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
