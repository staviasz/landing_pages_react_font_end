import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextContent } from '../Text';
import { Container, Grid, GridElement } from './styles';

interface GridObj {
  title: string;
  description: string;
}

interface GridTextProps {
  background: boolean;
  title: string;
  description: string;
  grid: GridObj[];
}

export const GridText = ({
  title,
  description,
  grid,
  background = false,
}: GridTextProps) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading
          as="h2"
          size="xhuge"
          uppercase="uppercase"
          colordark={background ? 'light' : 'dark'}
        >
          {title}
        </Heading>
        <TextContent>{description}</TextContent>
        <Grid>
          {grid.map((el) => (
            <GridElement key={el.title}>
              <Heading
                as="h3"
                size="medium"
                colordark={background ? 'light' : 'dark'}
              >
                {el.title}
              </Heading>
              <TextContent>{el.description}</TextContent>
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};
