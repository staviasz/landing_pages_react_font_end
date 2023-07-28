import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextContent } from '../Text';
import { Container, Grid, GridElement, Image } from './styles';

interface GridObj {
  altText: string;
  srcImage: string;
}

interface GridGaleryProps {
  background: boolean;
  title: string;
  description: string;
  grid: GridObj[];
}

export const GridGalery = ({
  title,
  description,
  grid,
  background = false,
}: GridGaleryProps) => {
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
            <GridElement key={el.srcImage}>
              <Image src={el.srcImage} alt={el.altText} />
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};
