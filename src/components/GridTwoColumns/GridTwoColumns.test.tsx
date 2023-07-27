import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/render-theme';
import { data } from '../mocks/mockpageData';

describe('<GridTwoColumn />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...data} />);
    expect(container).toMatchSnapshot();
  });
});
