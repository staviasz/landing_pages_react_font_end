import { GridText } from '.';
import { mGText } from '../../mocks/mockGridText';
import { renderTheme } from '../../styles/render-theme';

describe('<GridText/>', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <GridText {...mGText}>Children</GridText>,
    );
    expect(container).toMatchSnapshot();
  });
});
