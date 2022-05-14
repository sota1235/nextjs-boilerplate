import { ConcertThumbnail } from '../ConcertThumbnail';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionWrapper = styled.div`
  margin: 10px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
`;

interface Props {
  title: string;
  thumbnailURL: string;
  description: string;
}

const ConcertListItem: React.FC<Props> = ({
  title,
  thumbnailURL,
  description,
}) => {
  return (
    <Wrapper>
      <ConcertThumbnail title={title} thumbnailURL={thumbnailURL} />
      <DescriptionWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export { ConcertListItem };
