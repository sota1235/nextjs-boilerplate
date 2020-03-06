import * as React from 'react';
import { useRouter } from 'next/router';
import { Head } from '../../../nextComponents/Head';

const ConcertDetail: React.FC = () => {
  const router = useRouter();
  const { concertId } = router.query;

  return (
    <React.Fragment>
      <Head noindex={false} title={`Concert Page : ${concertId}`} />

      <div>Concert Page</div>
      <div>concert id = {concertId}</div>
    </React.Fragment>
  );
};

export default ConcertDetail;
