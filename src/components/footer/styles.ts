import styled, { css } from 'styled-components';
import { Text } from '../Text/styles';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    ${Text} {
      text-align: center;
    }
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
