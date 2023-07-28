import { screen } from '@testing-library/react';
import { NavLink } from '.';
import { links } from '../../mocks/mockLinks';
import { renderTheme } from '../../styles/render-theme';

describe('<NavLink/>', () => {
  it('should render', () => {
    renderTheme(<NavLink links={links}></NavLink>);
    expect(screen.getAllByRole('link')).toHaveLength(links.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLink />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLink links={links}></NavLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
