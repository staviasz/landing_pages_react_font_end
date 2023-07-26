import { MenuLink } from './styles';

interface MLinkProps {
  children: string;
  href: string;
  newtab?: boolean;
}
export const MLink = ({ children, href, newtab = false }: MLinkProps) => {
  const target = newtab ? '_blank' : '_self';
  return (
    <MenuLink target={target} href={href}>
      {children}
    </MenuLink>
  );
};
