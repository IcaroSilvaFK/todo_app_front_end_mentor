import { TbMoodEmpty } from 'react-icons/tb';

import { Container } from './styles';

export function EmptyComponent() {
  return (
    <Container>
      <span>Sorry, we had no results for your search.</span>
      <TbMoodEmpty size={25} />
    </Container>
  );
}
