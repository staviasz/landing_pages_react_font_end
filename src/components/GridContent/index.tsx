import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextContent } from '../Text';
import { Container, Html } from './styles';

interface GridContentProps {
  children?: React.ReactNode | string;
  title: string;
  html: string;
  background?: boolean;
}
export const GridContent = ({
  title,
  html,
  background = false,
}: GridContentProps) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading
          as="h2"
          uppercase="uppercase"
          colordark={background ? 'light' : 'dark'}
        >
          {title}
        </Heading>
        <Html>
          <TextContent>{html}</TextContent>
        </Html>
      </Container>
    </SectionBackground>
  );
};
