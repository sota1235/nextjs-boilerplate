import * as React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const ConcertDetail: React.FC = () => {
  const router = useRouter();
  const { concertId } = router.query;

  return (
    <React.Fragment>
      <Head>
        <title>Concert Page : {concertId}</title>
      </Head>
      <div>Concert Page</div>
      <div>concert id = {concertId}</div>
    </React.Fragment>
  );
};

export default ConcertDetail;
