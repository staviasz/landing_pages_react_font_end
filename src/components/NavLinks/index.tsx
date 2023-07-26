import { MenuLink } from '../MenuLink/styles';
import { NLink } from './styles';

type LinkObj = {
  children: string;
  href: string;
  target?: '_blank' | '_self' | string;
};

interface NavLinkProps {
  links?: LinkObj[];
}
export const NavLink = ({ links = [] }: NavLinkProps) => {
  return (
    <NLink>
      {links.map((link) => (
        <MenuLink key={link.href} {...link} />
      ))}
    </NLink>
  );
};
