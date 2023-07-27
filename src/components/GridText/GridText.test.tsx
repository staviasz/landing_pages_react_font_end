import { GridText } from '.';
import { renderTheme } from '../../styles/render-theme';
import { mGText } from '../mocks/mockGridText';

describe('<GridText/>', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <GridText {...mGText}>Children</GridText>,
    );
    expect(container).toMatchSnapshot();
  });
});
