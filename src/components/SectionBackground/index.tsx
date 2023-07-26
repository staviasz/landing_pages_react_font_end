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
  return (
    <Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};
