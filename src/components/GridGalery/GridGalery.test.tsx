import { GridGalery } from '.';
import { mGGalery } from '../../mocks/mockGGalery';
import { renderTheme } from '../../styles/render-theme';

describe('<GridGalery/>', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <GridGalery {...mGGalery}>Children</GridGalery>,
    );
    expect(container).toMatchSnapshot();
  });
});
