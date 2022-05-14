import styled from 'styled-components';

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

interface Props {
  title: string;
  thumbnailURL: string;
}

const ConcertThumbnail: React.FC<Props> = ({ title, thumbnailURL }) => {
  return <Image src={thumbnailURL} alt={title} />;
};

export { ConcertThumbnail };
