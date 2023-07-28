import { GridGalery } from '.';
import { renderTheme } from '../../styles/render-theme';
import { mGGalery } from '../mocks/mockGGalery';

describe('<GridGalery/>', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <GridGalery {...mGGalery}>Children</GridGalery>,
    );
    expect(container).toMatchSnapshot();
  });
});
