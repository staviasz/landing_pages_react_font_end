import { GridTwoColumn } from '.';
import { data } from '../../mocks/mockpageData';
import { renderTheme } from '../../styles/render-theme';

describe('<GridTwoColumn />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...data} />);
    expect(container).toMatchSnapshot();
  });
});
