import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Text } from '../Text/styles';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    > ${SectionContainer} {
      padding: ${theme.spacings.xsmall};
    }

    ${Text} {
      font-size: ${theme.font.sizes.small};
      text-align: center;
      margin: 0;
    }
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
