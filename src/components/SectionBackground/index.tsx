import { SectionContainer } from '../SectionContainer';
import { Container } from './styles';

interface SectionProps {
  children: React.ReactNode;
  background: boolean;
}

export const SectionBackground = ({
  children,
  background = false,
}: SectionProps) => {
  const backgroundColor = background ? 'true' : 'false';
  return (
    <Container background={backgroundColor}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};
