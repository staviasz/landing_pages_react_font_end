import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';
import { mBase } from './mockBasTemplate';

describe('<Base/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mBase} />);
    expect(container).toMatchSnapshot();
  });
});
