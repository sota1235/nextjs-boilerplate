import * as React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/dist/next-server/lib/head';

const ConcertEdit: React.FC = () => {
  const router = useRouter();
  const { concertId } = router.query;

  return (
    <React.Fragment>
      <Head>
        <title>Concert Edit Page : {concertId}</title>
      </Head>

      <div>Concert Edit Page</div>
      <div>concert id = {concertId}</div>
    </React.Fragment>
  );
};

export default ConcertEdit;
