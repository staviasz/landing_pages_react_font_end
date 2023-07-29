import { Base } from '.';
import { mBase } from '../../mocks/mockBasTemplate';
import { renderTheme } from '../../styles/render-theme';

describe('<Base/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mBase} />);
    expect(container).toMatchSnapshot();
  });
});
